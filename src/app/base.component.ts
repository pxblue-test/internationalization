import { Injectable } from '@angular/core';
import { LanguageTranslateService } from './shared/language-translate.service';


@Injectable()
export abstract class BaseComponent {
  langObject;

  constructor(public languageTranslateService:LanguageTranslateService) {
    this.languageTranslateService.currentLang.subscribe(lang => {
      const body = document.querySelector('body');
      body.setAttribute('dir', lang === 'ar' ? 'rtl': 'ltr');
      this.langObject = this.languageTranslateService.getLangObject(lang);
    });
  }

  ngOnInit(){
    this.languageTranslateService.setLang('en');
  }

}