import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guards';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [ {
  path: 'menu',
  canActivate: [AuthGuard],
  component: MenuComponent,
  data: { title: 'Menu' }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
