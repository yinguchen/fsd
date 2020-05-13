import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAdditemComponent } from './seller-additem.component';

describe('SellerAdditemComponent', () => {
  let component: SellerAdditemComponent;
  let fixture: ComponentFixture<SellerAdditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerAdditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
