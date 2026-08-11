import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
//create an instance of constructor service
constructor (private router:Router){
  console.log("Constructor called.");
}
ngOnChanges(changes: SimpleChanges): void {
  //use for components input property
    console.log("1.ngOnChanged called");
}

ngAfterContentInit(): void {
  //use for ng-content
  console.log("4.ngAfterContentInit called")
}
ngAfterContentChecked(): void {
  console.log("5.ngAfterContentChecked called");
}
ngAfterViewInit(): void {
  console.log("6.ngAfterViewInit called");
}
ngAfterViewChecked(): void {
  //use for viewChild
  console.log("7.ngAfterViewInit called")
}
ngOnDestroy(): void {
  console.log("8.ngOnDestroy called")
}
ngOnInit(): void {
  //use for API call
  console.log("2.ngOnInit called");
}
ngDoCheck(): void {
  //use for every change detection
  console.log("3.ngDoCheck called")
}
loginData(){
  //user verification logic(but for this case we will skip that and assume that it is true)
  // this.router.navigateByUrl("attribute-directives");
  this.router.navigate(['signals']);
}
}
