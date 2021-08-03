import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetAmountComponent } from './components/bet-amount/bet-amount.component';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    BetAmountComponent,
    NumberPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
