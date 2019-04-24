import { TestBed } from '@angular/core/testing';

import { ServicioPruebaService } from './servicio-prueba.service';

describe('ServicioPruebaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPruebaService = TestBed.get(ServicioPruebaService);
    expect(service).toBeTruthy();
  });
});
