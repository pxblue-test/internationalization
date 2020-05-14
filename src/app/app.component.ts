import { Component } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { SampleTranslation } from './i18n/sample-translation';
import { english } from './i18n/english';
import { BidirectionalService } from './services/bidirectional.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    open = false;
    enabledLocales: Array<keyof SampleTranslation['LANGUAGES']> = ['EN', 'ES', 'FR', 'DE', 'PT', 'ZH', 'AR'];
    selectedLanguage: string;
    selectedFruits = new Set<string>();
    fruits = Object.keys(english.FRUITS);

    constructor(public translate: TranslateService, private bidirectionalService: BidirectionalService) {
        translate.addLangs(this.enabledLocales);
        translate.setDefaultLang('EN');
        this.selectedLanguage = this.enabledLocales[0];
        this.listenForLanguageChanges();
    }

    toggleMenu(): void {
        this.open = !this.open;
    }

    toggleFruit(fruit: string): void {
        this.selectedFruits.has(fruit) ? this.selectedFruits.delete(fruit) : this.selectedFruits.add(fruit);
    }

    cancelItems(): void {
        this.selectedFruits.clear();
    }

    listenForLanguageChanges(): void {
        this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
            this.bidirectionalService.changeDirectionality(event.lang);
        });
    }
}
