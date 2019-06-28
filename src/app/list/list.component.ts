import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LanguageTranslateService } from '../shared/language-translate.service';
import { BaseComponent } from '../shared/base.component';

@Component({
  selector: 'list-selection-example',
  styleUrls: ['list.component.scss'],
  templateUrl: 'list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListSelectionExample extends BaseComponent{
  data: any[] = [];
  enableFooter = false;
  selectedItems = [];
  selectedLanguage = 'en';

  @Output('menuClicked') menuClicked =  new EventEmitter();

  constructor(public languageTranslateService:LanguageTranslateService) {
    super(languageTranslateService);
  }

// for menu on top left
   onMenuClicked(){
    this.menuClicked.emit();
  }
 
  languages =  [ 'en', 'sp', 'ge', 'ar' ];
 
  onSelected(itemIndex: any) {
    if (this.selectedItems.indexOf(itemIndex)===-1) {
      this.selectedItems.push(itemIndex);
    }
    else{
      this.selectedItems.splice(this.selectedItems.indexOf(itemIndex), 1);
    }
  }
  isSelected(itemIndex: any) {
    return this.selectedItems.indexOf(itemIndex)!==-1;
  }


  cancelItems() {
    this.selectedItems = [];
  }

  onLanguageSelection(event){
    this.languageTranslateService.setLang(event);
  }

}