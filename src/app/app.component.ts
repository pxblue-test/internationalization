import { Component} from '@angular/core';
import { LanguageTranslateService } from './shared/language-translate.service';
import { BaseComponent } from './base.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent{
  open = false; // is the nav menu open
  userMenu = false; // toggles menu mode on mobile
  menuIcons = [ 'home', 'folder', 'report', 'settings', 'help' ];

  constructor(
    public languageTranslateService:LanguageTranslateService
  ) {
      super(languageTranslateService);
  }

  toggleMenu(){
    this.open = !this.open;
  }

}