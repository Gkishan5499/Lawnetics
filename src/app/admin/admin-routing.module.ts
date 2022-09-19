import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
        path:'admin',component:AdminComponent,children:
        [
           {path:"",component:LoginComponent},
           {path:"admin-login",component:LoginComponent},
           {path:"dashboard",component:DasboardComponent }
        ]
}

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  