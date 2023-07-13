import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from '../calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculatorComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculatorComponent,
    HistoryComponent
  ]
})
export class CalculatorModule { }
