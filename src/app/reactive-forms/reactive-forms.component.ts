import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { convertToParamMap } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup;
  constructor(private fb:FormBuilder){

     this.reactiveForm=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(6),Validators.pattern("^[a-zA-Z]+$")]],
      lastname:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.maxLength(15),Validators.email]],
      password:['',[Validators.required]],
      isChecked:[''],
      address:this.fb.group({
        city:[''],
        street:[''],
        pincode:[''],
    // this.reactiveForm=new FormGroup({
    //   firstname:new FormControl(""),
    //   lastname:new FormControl(""),
    //   email:new FormControl(""),
    //   password:new FormControl(),
    //   isChecked:new FormControl(true),
    //   address:new FormGroup({
    //     city:new FormControl(""),
    //     street:new FormControl(""),
    //     pincode:new FormControl(),

      }),
       skills:this.fb.array([])
    })
    this.reactiveForm.controls['isChecked'].disable();
  }
  get skills():FormArray{
    return this.reactiveForm.get("skills") as FormArray
  }
   newSkill():FormGroup{
    return this.fb.group({
      skill:''
    })
   }
   addSkill(){
    this.skills.push(this.newSkill());
   }
   deleteSkill(i:number){
    this.skills.removeAt(i);
   }
  onSubmit(){
    console.log(this.reactiveForm.value);
  }
 setAllValues(){
  this.reactiveForm.setValue({
    firstname:"Poonam",
    lastname:"Patel",
    email:"pooname@gmail.com",
    password:123,
    isChecked:true,
    address:{
      city:'Mumbai',
      street:"Charni Road",
      pincode:12345
    }
  })
 }

 setPartialValues()
 {
  // this.reactiveForm.patchValue({
  //   address:{
  //     city:'Mumbai',
  //     street:'Charni Road',
  //     pincode:1234
  //   }
  // })
  this.reactiveForm.controls['firstname'].patchValue('Poonam');
 }

 resetForm(){
  // this.reactiveForm.reset();
  this.reactiveForm.controls['firstname'].reset();

 }
}
