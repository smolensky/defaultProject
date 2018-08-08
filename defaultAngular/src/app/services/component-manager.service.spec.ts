import { TestBed, inject } from '@angular/core/testing';

import { ComponentManagerService } from './component-manager.service';

describe('ComponentManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentManagerService]
    });
  });

  it('should be created', inject([ComponentManagerService], (service: ComponentManagerService) => {
    expect(service).toBeTruthy();
  }));
});
