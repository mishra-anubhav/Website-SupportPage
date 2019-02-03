import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './variable/landing-page/landing-page.component';
import { PricingPageComponent } from './variable/pricing-page/pricing-page.component';
import { ContactPageComponent } from './variable/contact-page/contact-page.component';
import { SupplyChainComponent } from './variable/product-page/supply-chain/supply-chain.component';
import { SelfCheckoutComponent } from './variable/product-page/self-checkout/self-checkout.component';
import { ComingSoonComponent } from './constant/coming-soon/coming-soon.component';
import { AnalyticComponent } from './variable/product-page/analytic/analytic.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent },
  { path: 'pricing', component:PricingPageComponent },
  { path:'contact', component:ContactPageComponent},
  { path:'supply-chain', component:SupplyChainComponent},
  { path:'self-checkout', component:SelfCheckoutComponent},
  { path:'coming-soon', component:ComingSoonComponent},
  { path:'analytic', component:AnalyticComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
