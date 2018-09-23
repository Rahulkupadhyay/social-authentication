import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms/';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  private static readonly errorMessages = {
    'required': (params) => params + ' field is required',
    'name': (params) => 'Wrong Name',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };

  constructor() {
    this.getMessage = this.getMessage.bind(this)
  }

  ngOnInit() {
  }

  @Input() field:{control: AbstractControl|FormControl, name: string};

  shouldShowErrors(): boolean {
    return this.field.control &&
      this.field.control.errors &&
      (this.field.control.dirty || this.field.control.touched);
  }

  listOfErrors(): string[] {
    //  console.log(Object.keys(this.control.errors));
    return Object.keys(this.field.control.errors)
      .map(this.getMessage);
  }

  private getMessage(type: string) {
    console.log(this.field.control)
    return ValidationMessageComponent.errorMessages[type](this.field.name);
  }

}
