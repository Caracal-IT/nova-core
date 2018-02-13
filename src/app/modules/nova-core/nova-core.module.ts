import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NovaHttpClient} from "./services/nova-http-client";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NovaCoreLibModule {
  public static forRoot( ): ModuleWithProviders {
    return {
      ngModule: NovaCoreLibModule,
      providers: [
        NovaHttpClient
      ]
    };
  }

}
