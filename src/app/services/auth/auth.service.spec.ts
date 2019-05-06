import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

describe('Service: Auth', ()=>{
  let service: AuthService;
  beforeEach(() => { ///before each test is run we create a new instance of AuthService and store it inside the service variable
    service = new AuthService();
  });

  afterEach(() =>{
    service = null;  // once service has run we set it back to null and remove and token in the local storage
    localStorage.removeItem('token');
  });

  it('should return ture from isAuthenticated when there is a token',() =>{
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy()
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
   
});
