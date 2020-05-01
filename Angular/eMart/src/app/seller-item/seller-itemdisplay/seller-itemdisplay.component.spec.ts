import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerItemdisplayComponent } from './seller-itemdisplay.component';

describe('SellerItemdisplayComponent', () => {
  let component: SellerItemdisplayComponent;
  let fixture: ComponentFixture<SellerItemdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerItemdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerItemdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
