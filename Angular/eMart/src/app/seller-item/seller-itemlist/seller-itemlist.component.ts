import { Component, OnInit } from '@angular/core';
import { EmartService } from 'src/app/emart/emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-itemlist',
  templateUrl: './seller-itemlist.component.html',
  styleUrls: ['./seller-itemlist.component.css']
})
export class SellerItemlistComponent implements OnInit {
allSitems:any;

  constructor(protected emartService: EmartService,
    protected router: Router) { }

  ngOnInit(): void {
    
    this.emartService.getAllSItems().subscribe(
      (response: any) => {
       
        this.allSitems = response;
        console.log(this.allSitems)
      }
    );
  }
edit(itemId: number){
  this.router.navigate(['/seller-itemdisplay/'+itemId]);
}
}
