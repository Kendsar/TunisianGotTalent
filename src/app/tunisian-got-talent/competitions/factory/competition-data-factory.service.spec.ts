/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompetitionDataFactoryService } from './competition-data-factory.service';

describe('Service: CompetitionDataFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetitionDataFactoryService]
    });
  });

  it('should ...', inject([CompetitionDataFactoryService], (service: CompetitionDataFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
