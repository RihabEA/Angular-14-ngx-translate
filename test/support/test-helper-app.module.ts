import {NgModule} from '@angular/core';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    HttpClientModule,
    TranslateModule,
    TranslatePipe,
    BrowserAnimationsModule
  ],
  providers: [TranslateService]
})
export class TestHelperAppModule {

}
