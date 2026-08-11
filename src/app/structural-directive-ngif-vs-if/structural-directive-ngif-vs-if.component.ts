import { Component, input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss'
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked: boolean = false;

  isInputBox: boolean = true;

  inputValue1: string = '';
  inputValue2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField() {
    this.isInputBox = true;
  }

  hideField() {
    this.isInputBox = false;
  }
}
