import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregcategorieComponent } from './enregcategorie.component';

describe('EnregcategorieComponent', () => {
  let component: EnregcategorieComponent;
  let fixture: ComponentFixture<EnregcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
