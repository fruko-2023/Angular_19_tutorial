import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-crud',
  imports: [CommonModule,ReusableComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit {
   

  parentProperty:string="CRUD Operations:Kindly find all users.";

  apiData : Iuser[]=[];

  constructor(private crud:CrudService,private router:Router){}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.crud.getData().subscribe(res=>{
      this.apiData=res;
    })
  }
 addNewUser(){
  //if you want to pass only a route then you must use navigateByUrl
  this.router.navigateByUrl('adduser');
 }
 onUpdate(id:number){
  //if you want to pass extra parameter along with route ,you must use navigate method
  this.router.navigate(['updateuser',id]);
 }
 onView(id:number)
 {
    this.router.navigate(['viewuser',id]);
 }
 onDelete(id:number){
  this.crud.deleteData(id).subscribe(res=>{
    alert("Record deleted successfully")
    this.getAllData();
  })
 }
}
