import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../shared/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'not-found', component: PagenotfoundComponent },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ApproutingModule { }
