import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { MainComponent } from '../user/main/main.component';
import { FooterComponent } from '../user/footer/footer.component';
import { PatentComponent } from '../user/patent/patent.component';
import { TrademarkComponent } from '../user/trademark/trademark.component';
import { DesignComponent } from '../user/design/design.component';
import { IplitigationComponent } from '../user/iplitigation/iplitigation.component';
import { CopyrightComponent } from '../user/copyright/copyright.component';
import { GeographicalIndicationComponent } from '../user/geographical-indication/geographical-indication.component';
import { IpCommercializationComponent } from '../user/ip-commercialization/ip-commercialization.component';
import { CyberLawComponent } from '../user/cyber-law/cyber-law.component';
import { HeaderComponent } from '../user/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from '../user/about-us/about-us.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from '../user/privacy-policy/privacy-policy.component';
import { TermsOfServicesComponent } from '../user/terms-of-services/terms-of-services.component';
import { ContactUsComponent } from '../user/contact-us/contact-us.component';
import { DisclaimerComponent } from '../user/disclaimer/disclaimer.component';

import { UserComponent } from './user.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    UserComponent,
    MainComponent,
    FooterComponent,
    PatentComponent,
    TrademarkComponent,
    DesignComponent,
    IplitigationComponent,
    CopyrightComponent,
    GeographicalIndicationComponent,
    IpCommercializationComponent,
    CyberLawComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsOfServicesComponent,
    DisclaimerComponent,
    WhatsappComponent,
    
  ],
  imports: [
    BrowserModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    CarouselModule
  ],
  providers: [],
 
})
export class UserModule { }

