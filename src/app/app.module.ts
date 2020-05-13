import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {ListSelectionExample} from './list/list.component';

import { LanguageTranslateService } from './shared/language-translate.service';
import { HttpClientModule } from '@angular/common/http';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [AppComponent, ListSelectionExample],
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
    HttpClientModule
  ],
  providers: [LanguageTranslateService],
  bootstrap: [AppComponent]
})

export class AppModule { }
