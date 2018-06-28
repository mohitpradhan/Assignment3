import { TestBed, inject } from '@angular/core/testing';

import { ColorpaletteService } from './colorpalette.service';

describe('ColorpaletteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorpaletteService]
    });
  });

  it('should be created', inject([ColorpaletteService], (service: ColorpaletteService) => {
    expect(service).toBeTruthy();
  }));
});
