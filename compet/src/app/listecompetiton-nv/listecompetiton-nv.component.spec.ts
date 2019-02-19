import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecompetitonNVComponent } from './listecompetiton-nv.component';

describe('ListecompetitonNVComponent', () => {
  let component: ListecompetitonNVComponent;
  let fixture: ComponentFixture<ListecompetitonNVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecompetitonNVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecompetitonNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
