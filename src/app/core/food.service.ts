import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';
import { Ifood } from './ifood';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // private fodItems = [{ id:1, foodItemName: 'Tandoori Chicken', foodDsc:'delicious', status: 'Available', qty: 2 },
  // { id:2, foodItemName: 'Fish', foodDsc:'delicious', status: 'Available', qty: 2 },
  // { id:3, foodItemName: 'Naan', foodDsc:'delicious', status: 'Available', qty: 2 },
  // { id:4, foodItemName: 'Panner Tikka', foodDsc:'delicious', status: 'Available', qty: 2 }]
  private foodItems = [];
  ifood: Ifood;
  constructor(private httpClient: HttpClient) { }

  addFoodItem(foodItem:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.foodItems.push(foodItem);
    this.httpClient.post('https://mydata-d0c3c.firebaseio.com/food.json', this.foodItems, { headers: headers })
    .subscribe(response => {
      console.log(response);
      console.log("inside observable");
    })
    console.log("After observable");
  }
  getFoodItem():any{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get('https://mydata-d0c3c.firebaseio.com/food.json', { headers: headers });
    // .subscribe(response => {
    //   console.log(response);
    //   let objKeys = Object.keys(response);
    //   objKeys.forEach(obj =>{this.foodItems.push(response[obj])});
    //   this.ifood.fetchFood(this.foodItems);
    //   // return new Observable((observer) => {
    //   //   this.ifood.fetchFood(this.foodItems)
    //   //   observer.next(this.foodItems);
    //   //   observer.complete();});
    // })  
  }
}
