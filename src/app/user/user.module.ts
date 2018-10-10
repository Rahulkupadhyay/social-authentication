import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ValidationMessageComponent } from './shared/validation-message/validation-message.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from "angular-6-social-login-v2";
import { NgxCaptchaModule } from 'ngx-captcha';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("1720274488101961")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("36896815746-rnlnadrib317tm7ogq39eg1au3cc5teq.apps.googleusercontent.com")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("81pidwrfuz9t0k")
      },
    ]
  );
  return config;
}



@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
    SocialLoginModule,
    NgxCaptchaModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  declarations: [RegisterComponent, LoginComponent, ValidationMessageComponent]
})
export class UserModule { }
