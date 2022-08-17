import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageClassificationComponent } from './image-classification/image-classification.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  ImageClassificationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
