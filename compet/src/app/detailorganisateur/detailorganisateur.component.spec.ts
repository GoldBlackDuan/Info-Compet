import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorganisateurComponent } from './detailorganisateur.component';

describe('DetailorganisateurComponent', () => {
  let component: DetailorganisateurComponent;
  let fixture: ComponentFixture<DetailorganisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailorganisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailorganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
