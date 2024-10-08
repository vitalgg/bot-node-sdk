import { OpenAPI } from './v2/openapi';

export const versionMapping = Object.create(null);

export function register(version: string, api: typeof OpenAPI) {
  versionMapping[version] = api;
}
