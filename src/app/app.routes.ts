import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignalsComponent } from './signals/signals.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInTypesComponent } from './built-in-types/built-in-types.component';

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
    //This below isthe wild card parameters that is always put down of the other routes
    {
        path: '**',
        component: PageNotFoundComponent
    }
    
];
