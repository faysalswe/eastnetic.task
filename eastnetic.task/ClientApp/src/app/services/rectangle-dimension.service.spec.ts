/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RectangleDimensionService } from './rectangle-dimension.service';

describe('Service: RectangleDimension', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RectangleDimensionService]
    });
  });

  it('should ...', inject([RectangleDimensionService], (service: RectangleDimensionService) => {
    expect(service).toBeTruthy();
  }));
});
