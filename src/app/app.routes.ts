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
    //This below isthe wild card parameters that is always put down of the other routes
    {
        path: '**',
        component: PageNotFoundComponent
    }
    
];
