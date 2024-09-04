import { RestyResponse } from 'resty-client';
import { IMessage, MessageToCreate } from './message';

/**
 * =============  UserMessage 私信接口  =============
 */
export interface UserMessageAPI {
  // CreateDirectMessage 创建私信频道
  createUserMessage: (um: UserMessageToCreate) => Promise<RestyResponse<IUserMessage>>;
  // PostDirectMessage 在私信频道内发消息
  postUserMessage: (openID: string, msg: MessageToCreate) => Promise<RestyResponse<IMessage>>;
}

// DirectMessageToCreate 创建私信频道的结构体定义
export interface UserMessageToCreate {
  user_id: string; // ID
  recipient_id: string; // 用户ID
}

// 子频道权限对象(ChannelPermissions)
export interface IUserMessage {
  user_openid: string; // 频道ID
  create_time: string; // 私信频道创建的时间戳
}
