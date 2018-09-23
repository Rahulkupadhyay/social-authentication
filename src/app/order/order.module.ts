import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ],
  declarations: [MenuComponent, FoodItemComponent]
})
export class OrderModule { }
