import { RestyResponse } from 'resty-client';
import { IMessage, MessageToCreate } from './message';

/**
 * =============  GroupAtMessage 私信接口  =============
 */
export interface GroupAtMessageAPI {
  // CreateDirectMessage 创建私信频道
  createGroupAtMessage: (um: GroupAtMessageToCreate) => Promise<RestyResponse<IGroupAtMessage>>;
  // PostDirectMessage 在私信频道内发消息
  postGroupAtMessage: (group_openID: string, msg: MessageToCreate) => Promise<RestyResponse<IMessage>>;
}

// DirectMessageToCreate 创建私信频道的结构体定义
export interface GroupAtMessageToCreate {
  group_openid: string; // ID
  recipient_id: string; // 用户ID
}

// 子频道权限对象(ChannelPermissions)
export interface IGroupAtMessage {
  group_openid: string; // 频道ID
  create_time: string; // 私信频道创建的时间戳
}
