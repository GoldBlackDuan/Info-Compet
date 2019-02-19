import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgadminComponent } from './detailgadmin.component';

describe('DetailgadminComponent', () => {
  let component: DetailgadminComponent;
  let fixture: ComponentFixture<DetailgadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailgadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
