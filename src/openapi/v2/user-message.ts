import {
  OpenAPIRequest,
  Config,
  UserMessageAPI,
  UserMessageToCreate,
  IUserMessage,
  IMessage,
  MessageToCreate,
} from '@src/types';
import { RestyResponse } from 'resty-client';
import { getURL } from './resource';

export default class UserMessage implements UserMessageAPI {
  public request: OpenAPIRequest;
  public config: Config;
  constructor(request: OpenAPIRequest, config: Config) {
    this.request = request;
    this.config = config;
  }
  // 创建私信频道
  public createUserMessage(dm: UserMessageToCreate): Promise<RestyResponse<IUserMessage>> {
    const options = {
      method: 'POST' as const,
      url: getURL('userMeDMURI'),
      data: dm,
    };
    return this.request<IUserMessage>(options);
  }

  // 给用户发消息
  public postUserMessage(openID: string, msg: MessageToCreate): Promise<RestyResponse<IMessage>> {
    const options = {
      method: 'POST' as const,
      url: getURL('umsURI'),
      rest: {
        openID,
      },
      data: msg,
    };
    return this.request<IMessage>(options);
  }
}
