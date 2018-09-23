import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../core/logger.service';
import { FoodService } from '../../core/food.service';
import { Ifood } from '../../core/ifood';
import { Observable } from '../../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [LoggerService, FoodService]
})
export class MenuComponent implements OnInit, Ifood {

  public productCreated = '';
  public foodItemName = 'Pickle';
  public qty = '';
  public status = '';
  public imageUrl = '../../assets/tandoor_chicken.jpg';
  public isAllowed = true;
  public isfoodItemCreated = false;
  public message = 'Product Created successfully !';
  public cartCount = 0;
  public foodDsc = 'Very delicious fodd. You should try it.';

  public foodItems = [];
  constructor(
    private route: ActivatedRoute,
    private loggerService: LoggerService,
    private foodService: FoodService
  ) {

  }
  ngOnInit() {
    alert(this.route.snapshot.data['title']);
    // this.getObservable().subscribe(res => { console.log(res); },
    //   err => { console.log(err); });
    // this.listOfProducts = this.productService.getProductDetails();
    // this.productService.getProductDetails().subscribe(res => {
    //   this.listOfProducts = res;
    // });
  }
  // keyPress(fanme) {
  //   console.log(this.foodItemName);
  // }

  onCreateProduct(event) {
    console.log(event);
    this.cartCount++;
    const foodItem = {
      id: 1,
      foodItemName: this.foodItemName,
      foodDsc: this.foodDsc,
      status: this.status,
      qty: this.qty,
      imageUrl: this.imageUrl
    };
    this.productCreated = this.foodItemName;
    this.isfoodItemCreated = true;
    // this.foodItems.push(foodItem);
    this.foodService.addFoodItem(foodItem);
    this.foodService.getFoodItem()
      .subscribe(res => {
        console.log(res);
        const objKeys = Object.keys(res);
        objKeys.forEach(obj => { this.foodItems.push(res[obj]); });
        // this.foodItems = res[Object.keys(res)[0]];
        console.log(this.foodItems);
      });

    // this.loggerService.logMessage('Product Created ' + this.productName);
  }

  recieveCartEvent($event) {
    this.loggerService.logMessage($event);
    this.message = $event;
    this.cartCount++;
  }

  fetchFood(foodItems) {
    console.log(foodItems);
    // throw new Error("Method not implemented.");
  }
  getObservable(): any {
    const obj = new Observable(observer => {
      observer.next({ phone: 'Nokia' }),
        observer.next({ phone: 'samsung' }),
        observer.next({ phone: 'LG' }),
        // observer.error("erorr"),
        observer.complete();
    });
    return obj;
  }
}



