import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
   constructor(private crud:CrudService,private activeRoute:ActivatedRoute,private router:Router){}

 userData:any;

  userId!:{
    uid:number;
  }
  ngOnInit(): void {
    this.userId={
     //activeRoute provides information about the current route
     //snapshot is the property of activated route that provides a snapshot of current routes parameter
     //params is the property of snapshot that contains an object with the routes parameter
     //ID is accessing the value of the ID parameter from the routes parameter
      uid:this.activeRoute.snapshot.params['id']
    }
    console.log(this.userId.uid);
    this.crud.getDataById(this.userId.uid).subscribe(
      res=>{
        this.userData=res;
        
    })
  }
  onClose(){
    this.router.navigateByUrl('crud');
  }
}
