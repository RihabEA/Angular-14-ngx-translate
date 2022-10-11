import {TestBed} from '@angular/core/testing';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {I18nService} from "./i18n.service";
import {setupTestBed} from "../../test/support/test-app-helper";

describe('The I18n service', () => {
  let translateService: TranslateService;
  let cookieService: CookieService;

  setupTestBed({});

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    cookieService = TestBed.inject(CookieService);
  });

  it('sets defaults language cookie on creation', () => {
    //Given
    spyOn(cookieService, 'set');

    //When
    const i18nService: I18nService = new I18nService(translateService, cookieService);

    //Then
    expect(cookieService.set).toHaveBeenCalledWith('trax-locale', 'en-US');
  });

  it('manages translation', () => {
    //Given
    spyOn(translateService, 'instant');
    const i18nService: I18nService = new I18nService(translateService, cookieService);
    const key: string = "sdsdsd";

    //When
    i18nService.get(key);

    //Then
    expect(translateService.instant).toHaveBeenCalledWith(key, undefined);
  });
});

