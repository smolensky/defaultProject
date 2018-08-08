import { TestBed, inject } from '@angular/core/testing';

import { ItemManagerService } from './item-manager.service';

describe('ItemManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemManagerService]
    });
  });

  it('should be created', inject([ItemManagerService], (service: ItemManagerService) => {
    expect(service).toBeTruthy();
  }));
});
