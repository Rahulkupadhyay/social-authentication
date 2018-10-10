import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemComponent } from './food-item.component';
import { LoggerService } from '../../core/logger.service';
import { FormsModule } from '@angular/forms';

describe('FoodItemComponent', () => {
  let component: FoodItemComponent;
  let fixture: ComponentFixture<FoodItemComponent>;

  beforeEach(async(() => {
    let mockloggerService = {};
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FoodItemComponent ],
      providers: [
        {provide: LoggerService, useValue: mockloggerService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let element = { id: 1, foodItemName: 'Pickle', foodDsc:'very good', status: 'Available', qty: 2 }
    fixture = TestBed.createComponent(FoodItemComponent);
    component = fixture.componentInstance;
    component.element = element;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
