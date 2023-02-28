import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NxWelcomeComponent} from "./nx-welcome.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NxWelcomeComponent },
  { path: '**', pathMatch: 'full', component: NxWelcomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
