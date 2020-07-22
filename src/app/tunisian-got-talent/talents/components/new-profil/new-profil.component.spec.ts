import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfilComponent } from './new-profil.component';

describe('NewProfilComponent', () => {
  let component: NewProfilComponent;
  let fixture: ComponentFixture<NewProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
