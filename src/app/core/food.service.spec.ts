import { TestBed, inject } from '@angular/core/testing';

import { FoodService } from './food.service';
import { HttpClientModule } from '@angular/common/http';

describe('FoodService', () => {
  let foodService:FoodService, mockHttp;

  beforeEach(()=>{
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post']);
    foodService = new FoodService(mockHttp);
  })
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FoodService]
    });
  });

  it('should be created', inject([FoodService], (service: FoodService) => {
    expect(service).toBeTruthy();
  }));
});
