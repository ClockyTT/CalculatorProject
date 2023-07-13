import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  currentN: number = 0;
  currentS: string = this.currentN.toString();
  lastN: number = 0;
  currAct: string = '';
  cStat: string = 'AC';
  divStyle: string = 'MAct';
  multStyle: string = 'MAct';
  diffStyle: string = 'MAct';
  sumStyle: string = 'MAct';
  outputStyle: string = 'outputShort';

  NumButtonClick(val: string): void {
    if (((this.currentN ** 2) ** 0.5).toString().length < 9) {
      if (val == '.' && this.currentS.includes('.')) {
        return;
      }

      if (
        this.currentN == 0 &&
        val != '.' &&
        !this.currentS.includes('.', this.currentS.length - 1)
      ) {
        this.currentS = val;
      } else {
        this.currentS += val;
        if (val == '.') {
          return;
        }
      }
      this.dynamicFontSize();
      this.currentN = Number(this.currentS);
      this.cStat = 'C';
    }
  }

  ActButtonClick(act: string): void {
    switch (act) {
      case 'opposite':
        this.currentN = Number(this.currentS);
        this.currentN *= -1;
        this.currentS = this.currentN.toString();
        this.actionStyleReset();
        break;

      case 'C':
        this.currentN = 0;
        this.currentS = this.currentN.toString();
        if (this.cStat == 'AC') {
          this.actionStyleReset();
          this.lastN = 0;
          this.currAct = '+';
        } else if (this.cStat == 'C') {
          this.cStat = 'AC';
        }
        break;

      case '=':
        this.currentN = Number(this.currentS);
        this.calculate(this.lastN, this.currentN, this.currAct);
        this.currAct = '+';
        this.lastN = this.currentN;
        this.currentN = 0;
        this.cStat = 'AC';
        this.actionStyleReset();
        break;

      case 'extended':
        alert('Extended calculator coming soon!');
        break;

      default:
        this.currentN = Number(this.currentS);
        this.calculate(this.lastN, this.currentN, this.currAct);
        this.currAct = act;
        this.actionStyleReset();
        if (act == '+') {
          this.sumStyle = 'MAct2';
        } else if (act == '-') {
          this.diffStyle = 'MAct2';
        } else if (act == '*') {
          this.multStyle = 'MAct2';
        } else if (act == '/') {
          this.divStyle = 'MAct2';
        }
        break;
    }
    this.dynamicFontSize();
  }

  calculate(op1: number, op2: number, act: string): void {
    switch (act) {
      case '+':
        this.currentN = op1 + op2;
        break;

      case '-':
        this.currentN = op1 - op2;
        break;

      case '*':
        this.currentN = op1 * op2;
        break;

      case '/':
        this.currentN = op1 / op2;
        break;
    }

    this.currentS = this.currentN.toString();
    this.lastN = this.currentN;
    this.currentN = 0;
  }

  actionStyleReset() {
    this.divStyle = 'MAct';
    this.multStyle = 'MAct';
    this.diffStyle = 'MAct';
    this.sumStyle = 'MAct';
  }

  dynamicFontSize(){
    let d = 6;
    if (this.currentS.includes(',')) {
      d++;
    }
    if (this.currentS.includes('-')) {
      d++;
    }
    if(this.currentS.length < d) {
      this.outputStyle = 'outputShort';
    } else {
      this.outputStyle = 'outputLong';
    }
  }
}
