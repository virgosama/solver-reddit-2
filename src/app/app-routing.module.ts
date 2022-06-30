import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DetailsPageComponent} from "./pages/details-page/details-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orangecounty',
    pathMatch: 'full'
  },
  {
    path: ':subId',
    component: MainPageComponent,
    children: [
      {
        path: ':listingId',
        component: DetailsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
