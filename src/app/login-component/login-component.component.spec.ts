import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentComponent } from './login-component.component';
import { AuthService } from '../services/auth/auth.service';

class MockAuthService extends AuthService{
  authenticated = false;

  isAuthenticated(){
    return this.authenticated
  }
}

xdescribe('LoginComponentComponent', () => {
  let component: LoginComponentComponent;
  let fixture: ComponentFixture<LoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

xdescribe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});


describe('Component: Login', ()=>{
  let component: LoginComponentComponent;
  let service: MockAuthService;

  beforeEach(() => {
    service = new MockAuthService();
    component = new LoginComponentComponent(service);
  });

  afterEach(() =>{
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('canLogin returns false when the user is not authenticated', () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', ()=> {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });

});