import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessageComponent } from './validation-message.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


describe('ValidationMessageComponent', () => {
  let component: ValidationMessageComponent;
  let fixture: ComponentFixture<ValidationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ValidationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageComponent);
    component = fixture.componentInstance;
    let input: FormControl;
    let field = {control: input , name: ''};
    component.field = field;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
