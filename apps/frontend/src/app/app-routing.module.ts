import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ApiConfigComponent,
  EventDetailsComponent,
  HomeComponent,
} from '@config-tool/ui/views';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },

  {
    path: 'details-config',
    pathMatch: 'full',
    component: EventDetailsComponent,
  },
  { path: 'api-config', pathMatch: 'full', component: ApiConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
