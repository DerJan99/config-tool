import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventDetailsComponent, HomeComponent } from '@config-tool/ui/views';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },

  { path: 'details', pathMatch: 'full', component: EventDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
