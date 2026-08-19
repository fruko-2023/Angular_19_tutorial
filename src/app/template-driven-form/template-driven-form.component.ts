import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit {
// firstname:string='';
// lastname:string='';
userObject : User= {};

onSubmit(userForm:NgForm){
  console.log(userForm.value);
}

ngOnInit(): void {
//   this.userObject={
//     firstname:"Rahul",
//     lastname:"Varma",
//     email:"rahul@gmail.com",
//     password:'22er5',
//     isCheck:true,
// }
}
setValues(userForm:NgForm){
  let obj={
    firstname:"Rahul",
    lastname:"Varma",
    email:"rahul@gmail.com",
    password:'22er5',
    isCheck:true,
  }
  userForm.setValue(obj);
}
patchValues(userForm:NgForm){
  let obj={
    firstname:"Rahul",
    lastname:"Varma",
    email:"rahul@gmail.com",
  }
  userForm.control.patchValue(obj);
}
resetValues(userForm:NgForm){
  userForm.reset();
  // userForm.resetForm();
}
}
