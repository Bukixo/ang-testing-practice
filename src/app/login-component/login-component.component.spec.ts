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
  let service: AuthService;
  let spy: any;

  beforeEach(() => {
    service = new AuthService(); //created a real instance of AuthService
    component = new LoginComponentComponent(service); //inject it into our component
  });

  afterEach(() =>{ //sets our service and component back to null which means theres not need to set localstorage to empty
    service = null;
    component = null;
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false); //created a spy that will get the 'isAuthenticated' from the service and return it to false
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled() // here we check if the if 'isAuthenticated' function was called.
  });

  it('canLogin returns false when the user is not authenticated', ()=> {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true)
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

});