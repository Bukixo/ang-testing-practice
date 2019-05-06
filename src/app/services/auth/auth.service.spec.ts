import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginComponentComponent } from 'src/app/login-component/login-component.component';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});


describe('Component: Login', ()=>{
  let component: LoginComponentComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponentComponent(service);
  });

  afterEach(() =>{
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', ()=> {
    localStorage.setItem('token', '1234');
    expect(component.needsLogin()).toBeFalsy();
  });

});
