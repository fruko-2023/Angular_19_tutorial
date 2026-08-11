import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-types',
  imports: [CommonModule],
  templateUrl: './built-in-types.component.html',
  styleUrl: './built-in-types.component.scss'
})
export class BuiltInTypesComponent {
   angularPipes: string="use pipes to format data in angular templates";
   personData={
    name:'John',
    age:30,
    city:'Mumbai'
   }
   currentDate:Date=new Date();

   items = of(['Apple','Banana','Mango']);
  }
