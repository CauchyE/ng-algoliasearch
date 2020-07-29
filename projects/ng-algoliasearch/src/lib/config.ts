import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<Config>('config');

export type Config = {
  app_id: string;
  search_api_key: string;
};
