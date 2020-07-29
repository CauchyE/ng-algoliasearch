import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config, CONFIG } from './config';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AlgoliaModule {
  static forRoot(config: Config): ModuleWithProviders<AlgoliaModule> {
    return {
      ngModule: AlgoliaModule,
      providers: [{ provide: CONFIG, useValue: config }],
    };
  }
}
