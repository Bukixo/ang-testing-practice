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
  let authService: AuthService;
  let fixture : ComponentFixture<LoginComponentComponent>; // a fixture is a wrapper for a component and its a template
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({ ///initiating components to perform dependency injection
      declarations: [LoginComponentComponent],
      providers: [AuthService]
    });

    //create an instance of a component fixture, this injects the authservice into component constructor
    fixture = TestBed.createComponent(LoginComponentComponent);

    //get test component from the fixture
    component = fixture.componentInstance

    // UserService provided to the TestBed
    authService =  TestBed.get(AuthService) // we can get resolve dependencies using the the testbed injector

  });

  afterEach(() =>{ //sets our service and component back to null which means theres not need to set localstorage to empty
    authService = null;
    component = null;
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(false); //created a spy that will get the 'isAuthenticated' from the authService and return it to false
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled() // here we check if the if 'isAuthenticated' function was called.
  });

  it('canLogin returns false when the user is not authenticated', ()=> {
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(true)
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

});