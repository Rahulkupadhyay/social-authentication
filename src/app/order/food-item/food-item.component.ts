import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from '../../core/logger.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {
  @Input() element: { id: number, foodItemName: string, foodDsc:string, status: string, qty: number };
  @Output() addToCartEvent = new EventEmitter<string>();

  public foodName = 'Tandoori Chicken';
  public foodDesc = 'Classic Tandoori Chicken Is An Indian Recipe That’s Marinated In Yogurt, Garam Masala And Cayenne Before Baking Made Easier, A Perfect Weeknight Meal.';
  public message = 'Added to cart';
  public quantity = 3;
  public status = 'Available';
  public imageUrl = '../../assets/tandoor_chicken.jpg';
  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
   
  }
  addToCart(product) {
    this.loggerService.logMessage(product);
    this.addToCartEvent.emit(`${product.foodItemName} ${this.message}`);
  }

 
}
