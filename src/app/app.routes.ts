import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignalsComponent } from './signals/signals.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInTypesComponent } from './built-in-types/built-in-types.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ProfileComponent } from './profile/profile.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { CRUDComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { ReusableComponent } from './reusable/reusable.component';

export const routes: Routes = [
    // {
    //   path:'',
    //   component:UserComponent
    // },
    {path:'',
     redirectTo:'user',
     pathMatch:'full'
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'signals',
        component:SignalsComponent
    },
    {
        path: 'data-binding',
        component:DataBindingsComponent
    },
    {
        path:'attribute-directives',
        component:AttributeDirectivesComponent
    },
    {
        path:'linked-signal',
        component:LinkedSignalComponent
    },
    {
        path:'built-in-types',
        component:BuiltInTypesComponent
    },
    {
        path:'tdf',
        component:TemplateDrivenFormComponent
    },
    {
        path:'rf',
        component:ReactiveFormsComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'crud',
        component:CRUDComponent
    }, 
    {
        path:'adduser',
        component:AddUserComponent
    },  
    {
        path:'viewuser/:id',
        component:ViewUserComponent
    },  
    {
        path:'updateuser/:id',
        component:UpdateUserComponent
    },
     {
        path:'resourceapi',
        component:ResourceApiComponent
    },
      {
        path:'reusable',
        component:ReusableComponent
    },
    //This below isthe wild card parameters that is always put down of the other routes
    {
        path: '**',
        component: PageNotFoundComponent
    }
    
];
