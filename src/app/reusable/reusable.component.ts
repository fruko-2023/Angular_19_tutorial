import { Component,HostListener,Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.scss'
})
export class ReusableComponent {
@Input() childProperty:string="Hello All:Welcome to FED Learning";

//Example of @HostLinester decorators
@HostListener('click')
onClick(){
  console.log("Button clicked");
}
}

