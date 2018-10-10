import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialLoginModule, AuthServiceConfig, AuthService, LoginProvider, FacebookLoginProvider } from 'angular-6-social-login-v2';
import { AuthServiceConfigItem } from 'angular-6-social-login-v2/auth.service';

@Directive({
  selector:'[routerLink]',
  host: {'(click)': 'onClick()'}
})
export class RouterLinkDirectiveStub {
  @Input ('routerLink') roterParams: any;
  navigatedTo: any = null;
  onClick() {
    this.navigatedTo = this.roterParams;
  }
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthServiceConfig: AuthServiceConfig;
  let mockAuthServiceitem: AuthServiceConfigItem;
  beforeEach(() => {
    mockAuthServiceitem = {id:'', provider: new FacebookLoginProvider('')};
    mockAuthServiceConfig = new AuthServiceConfig([mockAuthServiceitem]);
  })
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, NgxCaptchaModule, FormsModule, RouterTestingModule, SocialLoginModule],
      declarations: [ LoginComponent, RouterLinkDirectiveStub ],
      providers: [
        AuthService,
        {provide: AuthServiceConfig , useValue: mockAuthServiceConfig}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
