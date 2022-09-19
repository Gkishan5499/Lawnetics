import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { CyberLawComponent } from './cyber-law/cyber-law.component';
import { DesignComponent } from './design/design.component';
import { GeographicalIndicationComponent } from './geographical-indication/geographical-indication.component';
import { IpCommercializationComponent } from './ip-commercialization/ip-commercialization.component';
import { IplitigationComponent } from './iplitigation/iplitigation.component';
import { MainComponent } from './main/main.component';
import { PatentComponent } from './patent/patent.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'user', component:UserComponent ,children:
  [
   {path:'',component:MainComponent} ,
  { path: 'patent', component: PatentComponent},  
  { path: 'trademark', component: TrademarkComponent},
  { path: 'design', component: DesignComponent},
  { path: 'copyright', component: CopyrightComponent},
  { path: 'cyber-law', component: CyberLawComponent},
  { path: 'geographical-indication', component: GeographicalIndicationComponent},
  { path: 'ip-litigation', component: IplitigationComponent},
  { path: 'ip-commercialization', component: IpCommercializationComponent},
  { path: 'home', component: MainComponent},
  { path: 'about-us', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'privacy-policy', component:PrivacyPolicyComponent},
  {path: 'terms-of-services', component:TermsOfServicesComponent},
 
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
