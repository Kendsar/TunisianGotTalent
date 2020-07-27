import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseMainComponent } from './entreprise-main.component';

describe('EntrepriseMainComponent', () => {
  let component: EntrepriseMainComponent;
  let fixture: ComponentFixture<EntrepriseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
