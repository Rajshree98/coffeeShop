import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunnelComponent } from './components/funnel/funnel.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
  {
  path:"funnel",
  component:FunnelComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
