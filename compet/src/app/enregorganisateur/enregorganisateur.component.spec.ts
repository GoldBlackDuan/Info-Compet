import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregorganisateurComponent } from './enregorganisateur.component';

describe('EnregorganisateurComponent', () => {
  let component: EnregorganisateurComponent;
  let fixture: ComponentFixture<EnregorganisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregorganisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregorganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
