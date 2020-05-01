import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerItemlistComponent } from './seller-itemlist.component';

describe('SellerItemlistComponent', () => {
  let component: SellerItemlistComponent;
  let fixture: ComponentFixture<SellerItemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerItemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
