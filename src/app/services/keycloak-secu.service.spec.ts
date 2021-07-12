import { TestBed } from '@angular/core/testing';

import { KeycloakSecuService } from './keycloak-secu.service';

describe('KeycloakSecuService', () => {
  let service: KeycloakSecuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakSecuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
