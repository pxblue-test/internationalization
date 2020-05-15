import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule} from "./app.module";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create the app', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it(`should load english by default`, () => {
        fixture.detectChanges();
        const i18n = fixture.nativeElement.querySelector('#i18n').innerHTML;
        component.translate.use('SE');
        expect(i18n).toEqual('Internationalization');
    });

    it(`should load spanish on language change`, () => {
        fixture.detectChanges();
        component.translate.use('ES');
        fixture.detectChanges();
        const i18n = fixture.nativeElement.querySelector('#i18n').innerHTML;
        expect(i18n).toEqual('Internacionalización');
    });
});
