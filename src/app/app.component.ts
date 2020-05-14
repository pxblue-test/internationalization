import { Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SampleTranslation} from "./i18n/sample-translation";
import {english} from "./i18n/english";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  open = false;
  menuIcons = [ 'home', 'folder', 'report', 'settings', 'help' ];
  menuItems = Object.keys(english.MENU_ITEMS);

    constructor(public translate: TranslateService) {
        const enabledLocales: Array<keyof SampleTranslation['LANGUAGES']> = ["EN", "ES", 'FR', 'DE', 'PT', 'ZH', 'AR'];
        translate.addLangs(enabledLocales);
        translate.setDefaultLang('EN');
    }

  toggleMenu(){
    this.open = !this.open;
  }

}
