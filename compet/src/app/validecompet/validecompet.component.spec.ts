import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidecompetComponent } from './validecompet.component';

describe('ValidecompetComponent', () => {
  let component: ValidecompetComponent;
  let fixture: ComponentFixture<ValidecompetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidecompetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidecompetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
