import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms/';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login-v2';
import { InvisibleReCaptchaComponent } from 'ngx-captcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit  {
  loginForm: FormGroup;
  emailVal:any = 'ray';
  @ViewChild('captchaElem') captchaElem: InvisibleReCaptchaComponent;
  siteKey: string = '6LfvqXIUAAAAAM5HTms64GNv8Bfr7kPRDtgcBv_X';
  public badge: '';
  //'bottomright' | 'bottomleft' | 'inline' = 'inline';
  public type: '';
  //'image' | 'audio';
  recaptcha:any;

  constructor(public router: Router, private fb: FormBuilder, private socialAuthService: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(20),
      Validators.pattern('')]],
      password: '[]',
      recaptcha: ['', Validators.required]
    })
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
}

  login() {
    console.log("Login");
    this.captchaElem.execute();
    // this.router.navigate(['menu']);
  }


  // social sign in
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
      }
    );
}

handleExpire() {

}

handleReady() {

}

handleLoad() {
  console.log("Loded Recaptcha");
}

handleSuccess(event) {
  console.log(event);
}

}
