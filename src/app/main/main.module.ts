import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CalculatorModule } from '../calculator/calculator.module';


@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CalculatorModule
  ],
  exports: [
    BaseComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
