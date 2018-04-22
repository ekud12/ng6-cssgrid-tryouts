import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialImports } from './material.imports';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StickyNavModule } from 'ng2-sticky-nav';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, StickyNavModule, materialImports, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
