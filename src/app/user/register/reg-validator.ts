import { ValidatorFn, AbstractControl, Validators } from "@angular/forms";

export class RegValidator  {

    static  ageRange(min:number, max:number): ValidatorFn {
        return (c: AbstractControl): {[key:string]: boolean}|null => {
            if(c.value > min && c.value < max) {
              return null;
            }
            return {'age': true};
          }
    }
    static nameValidator(c: AbstractControl ) {
        if(c.value === 'rahul') {
            return null;
        }
        return {'name': true};
    }
}
