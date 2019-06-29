import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from '@angular/flex-layout';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslateService } from './shared/language-translate.service';
import { HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  let service;
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // BaseComponent
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        LayoutModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [LanguageTranslateService]
    }).compileComponents();

    service = TestBed.get(LanguageTranslateService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('component has menu icons array of length 5', () => {
    expect(component.menuIcons.length).toEqual(5);
  });

  it('component "userMenu" property is false', () => {
    expect(component.userMenu).toBeFalsy();
  });

  it('component "open" property is false', () => {
    expect(component.open).toBeFalsy();
  });

  it('toggleMenu make "open" to true', () => {
    component.toggleMenu();
    expect(component.open).toBeTruthy();
  });
  
  // for add to cart text 
  it(`should get the German language data when the language set to german'`, () => {
    const langObject = service.getLangObject('ge');
    expect(langObject.ADD_TO_CART).toEqual('In den Einkaufswagen');
  });

  //for delete text
  it(`should get the spanish language data when the language set to spanish'`, () => {
    const langObject = service.getLangObject('sp');
    expect(langObject.ITEMS).toEqual('Artículos');
  });

  // for title
  it(`should get the spanish language data when the language set to spanish'`, () => {
    const langObject = service.getLangObject('en');
    expect(langObject.I18N).toEqual('Internationalization');
  });
});