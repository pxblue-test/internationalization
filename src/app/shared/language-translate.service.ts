import { EventEmitter } from '@angular/core';
import * as EnglishStrings from '../resources/english';
import * as ArabicStrings from '../resources/arabic';
import * as GermanStrings from '../resources/german';
import * as SpanishStrings from '../resources/spanish';

export class LanguageTranslateService {
  public currentLang: EventEmitter<string> = new EventEmitter();
  setLang(val) {
    this.currentLang.emit(val);
  }
  lang = 'en';
  
  getLangObject(lang) {
    switch(lang){
      case 'en': 
        return EnglishStrings;
      case 'ge':
        return GermanStrings;
      case 'ar':
        return ArabicStrings;
      case 'sp':
        return SpanishStrings;
    }
  }
}