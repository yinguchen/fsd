import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { HomeComponent } from './emart/home/home.component';
import { LoginComponent } from './emart/login/login.component';
import { BuyerSignupComponent } from './emart/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/seller-signup/seller-signup.component';
import { LogoutComponent } from './emart/logout/logout.component';
import { HeaderComponent } from './emart/header/header.component';
import { FooterComponent } from './emart/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerItemlistComponent } from './seller-item/seller-itemlist/seller-itemlist.component';
import { SellerItemdisplayComponent } from './seller-item/seller-itemdisplay/seller-itemdisplay.component';
import { AddproductComponent } from './seller-item/seller-additem/addproduct.component';
import { ReportComponent } from './seller-item/report/report.component';
import { AuthGuardService } from './emart/auth-guard.service';
import { ContactComponent } from './emart/contact/contact.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDisplayComponent,
    CartListComponent,
    BillViewComponent,
    BillListComponent,
    HomeComponent,
    LoginComponent,
    BuyerSignupComponent,
    SellerSignupComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    SellerItemlistComponent,
    SellerItemdisplayComponent,
    AddproductComponent,
    ReportComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    MyDatePickerModule,
    HttpClientModule
  ],
  
  providers: [AuthGuardService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
