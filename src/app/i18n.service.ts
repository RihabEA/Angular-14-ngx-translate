import {EventEmitter, Injectable} from '@angular/core';

import {DefaultLangChangeEvent, LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TranslateServices extends TranslateService {

}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private static COOKIE = 'trax-locale';
  private static DEFAULT_LOCALE = 'en-US';

  onLangChange: EventEmitter<string> = new EventEmitter();

  constructor(private translateService: TranslateServices, private cookieService: CookieService) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.onLangChange.emit(event.lang);
    });

    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.onLangChange.emit(event.lang);
    });
    this.translateService.setDefaultLang(I18nService.DEFAULT_LOCALE);
    this.cookieService.set(I18nService.COOKIE, I18nService.DEFAULT_LOCALE);
  }

  get(key: string, interpolateParams?: Object): string {
    return this.translateService.instant(key, interpolateParams);
  }
}
