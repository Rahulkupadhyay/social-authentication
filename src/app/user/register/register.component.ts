import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms/';
import { RegValidator } from './reg-validator';

function emailValidator(c: AbstractControl) {
  let emailControl =  c.get('email');
  let cnfEmailControl = c.get('cnfEmail');
  if(emailControl.pristine && cnfEmailControl.pristine) {
    return null;
  }
  if(emailControl.value === cnfEmailControl.value ) {
    return null;
  }
  return {'match': true};
}
function ageRange(c: AbstractControl): {[key:string]: boolean}|null {
  if(c.value > 20 && c.value < 40) {
    return null;
  }
  return {'ageRange': true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fName: ['', [Validators.required, RegValidator.nameValidator]],
      lName: ['', Validators.required],
      age: ['', [Validators.required, RegValidator.ageRange(20, 40)]],
      emailGroup: this.fb.group({
        email: ['',[Validators.required, 
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        cnfEmail: ['', [Validators.required]]
      }, {validator: emailValidator})
    })
    
    this.route.params.subscribe(response => {
      console.log(response);
    });

    // this.route.paramMap.pipe(map((res: ParamMap) => alert(res.get('id'))));
  }

}
