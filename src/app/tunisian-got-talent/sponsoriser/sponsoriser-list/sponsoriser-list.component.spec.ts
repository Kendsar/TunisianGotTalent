import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoriserListComponent } from './sponsoriser-list.component';

describe('SponsoriserListComponent', () => {
  let component: SponsoriserListComponent;
  let fixture: ComponentFixture<SponsoriserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoriserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoriserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
