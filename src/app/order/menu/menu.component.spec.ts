import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../../core/logger.service';
import { FoodService } from '../../core/food.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let mockActivatedRoute, mockLoggerService, mockFoodService;

  beforeEach(()=>{
    mockActivatedRoute = {
      snapshot:  {data: () => {return 'Menu'; }}
    };
    mockLoggerService = jasmine.createSpyObj(['logMessage']);
    mockFoodService = jasmine.createSpyObj(['addFoodItem', 'getFoodItem']);
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ MenuComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: LoggerService, useValue: mockLoggerService},
        {provide: FoodService, useValue: mockFoodService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
