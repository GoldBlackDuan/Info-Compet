import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregadminComponent } from './enregadmin.component';

describe('EnregadminComponent', () => {
  let component: EnregadminComponent;
  let fixture: ComponentFixture<EnregadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
