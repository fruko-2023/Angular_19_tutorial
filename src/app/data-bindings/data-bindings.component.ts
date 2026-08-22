import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../Services/shared-data.service';

@Component({
  selector: 'app-data-bindings',
  imports: [FormsModule],
  templateUrl: './data-bindings.component.html',
  styleUrl: './data-bindings.component.scss'
})
export class DataBindingsComponent {

 dummyData:any;
  isEligible:boolean;

  constructor(private _sharedData:SharedDataService){
    this.dummyData=this._sharedData.userData

    this.isEligible=this._sharedData.isEligibleForSubscription();
  }




  
  //One way data binding using interpolation
  name: string = "FEDLearning";
  topic: string = "Data Bindings";
  image:string = "https://yt3.googleusercontent.com/ytc/AIdro_mxyoPhO_AIlXjwVDtAhIJ2GeLGVLkWUc1PV9tnQYg6-so=s160-c-k-c0x00ffffff-no-rj";
  //This below has been written for two way-bindings
  random="";

  onSave(){
    alert("Data Saved successfully")
  }
  onChange(){
    alert("Country has changed.");
  }
}
