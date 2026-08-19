import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'app-built-in-types',
  imports: [CommonModule,CustomPipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-types.component.html',
  styleUrl: './built-in-types.component.scss'
})
export class BuiltInTypesComponent {
// mobileNumber:any=9090909090;
mobileNumber:any=null

   angularPipes: string="use pipes to format data in angular templates";
   personData={
    name:'John',
    age:30,
    city:'Mumbai'
   }
   currentDate:Date=new Date();

   items = of(['Apple','Banana','Mango']);
  }
