import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './constant/header/header.component';
import { FooterComponent } from './constant/footer/footer.component';
import { CopyrightComponent } from './constant/copyright/copyright.component';
import { LandingPageComponent } from './variable/landing-page/landing-page.component';
import { SelfCheckoutComponent } from './variable/product-page/self-checkout/self-checkout.component';
import { SupplyChainComponent } from './variable/product-page/supply-chain/supply-chain.component';
import { AnalyticComponent } from './variable/product-page/analytic/analytic.component';
import { PricingPageComponent } from './variable/pricing-page/pricing-page.component';
import { ContactPageComponent } from './variable/contact-page/contact-page.component';
import { ComingSoonComponent } from './constant/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    LandingPageComponent,
    SelfCheckoutComponent,
    SupplyChainComponent,
    AnalyticComponent,
    PricingPageComponent,
    ContactPageComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
