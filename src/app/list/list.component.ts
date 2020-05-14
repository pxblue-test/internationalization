import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { english } from '../i18n/english';

@Component({
    selector: 'list-component',
    styleUrls: ['list.component.scss'],
    templateUrl: 'list.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ListComponent {
    fruits = Object.keys(english.FRUITS);

    selectedFruits = new Set<string>();

    languages: string[];
    selectedLanguage: string;

    constructor(public translate: TranslateService) {
        this.languages = translate.getLangs();
        this.selectedLanguage = this.languages[0];
        this.translate.onLangChange.subscribe((lang) => {
            const body = document.querySelector('body');
            console.log('transforming!');
            body.setAttribute('dir', this.isRTL(lang) ? 'rtl' : 'ltr');
        });
    }
    @Output('menuClicked') menuClicked = new EventEmitter();

    // for menu on top left
    onMenuClicked() {
        this.menuClicked.emit();
    }

    toggleFruit(fruit: string) {
        this.selectedFruits.has(fruit) ? this.selectedFruits.delete(fruit) : this.selectedFruits.add(fruit);
    }

    isRTL(lang: string): boolean {
        return lang === 'ar';
    }

    cancelItems() {
        this.selectedFruits.clear();
    }
}
