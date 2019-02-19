import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeorganisateurComponent } from './listeorganisateur.component';

describe('ListeorganisateurComponent', () => {
  let component: ListeorganisateurComponent;
  let fixture: ComponentFixture<ListeorganisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeorganisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeorganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
