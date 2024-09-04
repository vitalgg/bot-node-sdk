import { RequestOptions, RestyResponse } from 'resty-client';
import { AudioAPI } from './v2/audio';
import { ChannelAPI } from './v2/channel';
import { ChannelPermissionsAPI } from './v2/channel-permission';
import { DirectMessageAPI } from './v2/direct-message';
import { UserMessageAPI } from './v2/user-message';
import { GroupAtMessageAPI } from './v2/group-at-message';
import { GuildAPI } from './v2/guild';
import { MeAPI } from './v2/me';
import { MemberAPI } from './v2/member';
import { MessageAPI } from './v2/message';
import { RoleAPI } from './v2/role';
import { MuteAPI } from './v2/mute';
import { AnnounceAPI } from './v2/announce';
import { ScheduleAPI } from './v2/schedule';
import { ReactionAPI } from './v2/reaction';
import { InteractionAPI } from './v2/interaction';
import { PinsMessageAPI } from './v2/pins-message';
import { GuildPermissionsAPI } from './v2/guild-permission';

export type OpenAPIRequest = <T extends Record<any, any> = any>(options: RequestOptions) => Promise<RestyResponse<T>>;

export interface Config {
  appID: string;
  token: string;
  sandbox?: boolean;
}

export interface IOpenAPI {
  config: Config;
  request: OpenAPIRequest;
  guildApi: GuildAPI;
  channelApi: ChannelAPI;
  meApi: MeAPI;
  messageApi: MessageAPI;
  memberApi: MemberAPI;
  roleApi: RoleAPI;
  muteApi: MuteAPI;
  announceApi: AnnounceAPI;
  scheduleApi: ScheduleAPI;
  directMessageApi: DirectMessageAPI;
  userMessageApi: UserMessageAPI;
  groupAtMessageApi: GroupAtMessageAPI;
  channelPermissionsApi: ChannelPermissionsAPI;
  audioApi: AudioAPI;
  guildPermissionsApi: GuildPermissionsAPI;
  reactionApi: ReactionAPI;
  interactionApi: InteractionAPI;
  pinsMessageApi: PinsMessageAPI;
}

export type APIVersion = `v${number}`;

export interface Token {
  appID: number;
  accessToken: string;
  type: string;
}

// WebsocketAPI websocket 接入地址
export interface WebsocketAPI {
  ws: () => any;
}

export * from './v2/audio';
export * from './v2/channel';
export * from './v2/channel-permission';
export * from './v2/direct-message';
export * from './v2/user-message';
export * from './v2/group-at-message';
export * from './v2/guild';
export * from './v2/me';
export * from './v2/member';
export * from './v2/message';
export * from './v2/role';
export * from './v2/mute';
export * from './v2/announce';
export * from './v2/schedule';
export * from './v2/reaction';
export * from './v2/interaction';
export * from './v2/pins-message';
export * from './v2/guild-permission';
