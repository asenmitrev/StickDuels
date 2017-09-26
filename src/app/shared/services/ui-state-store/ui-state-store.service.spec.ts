import { TestBed, inject } from '@angular/core/testing';

import { UiStateStoreService } from './ui-state-store.service';

describe('UiStateStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiStateStoreService]
    });
  });

  it('should be created', inject([UiStateStoreService], (service: UiStateStoreService) => {
    expect(service).toBeTruthy();
  }));
});
