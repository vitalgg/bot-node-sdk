import {
  OpenAPIRequest,
  Config,
  GroupAtMessageAPI,
  GroupAtMessageToCreate,
  IGroupAtMessage,
  IMessage,
  MessageToCreate,
} from '@src/types';
import { RestyResponse } from 'resty-client';
import { getURL } from './resource';

export default class GroupAtMessage implements GroupAtMessageAPI {
  public request: OpenAPIRequest;
  public config: Config;
  constructor(request: OpenAPIRequest, config: Config) {
    this.request = request;
    this.config = config;
  }
  // 创建私信频道
  public createGroupAtMessage(dm: GroupAtMessageToCreate): Promise<RestyResponse<IGroupAtMessage>> {
    const options = {
      method: 'POST' as const,
      url: getURL('userMeDMURI'),
      data: dm,
    };
    return this.request<IGroupAtMessage>(options);
  }

  // 给用户发消息
  public postGroupAtMessage(group_openID: string, msg: MessageToCreate): Promise<RestyResponse<IMessage>> {
    const options = {
      method: 'POST' as const,
      url: getURL('gmsURI'),
      rest: {
        group_openID,
      },
      data: msg,
    };
    return this.request<IMessage>(options);
  }
}
