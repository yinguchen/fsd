import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from '../../emart/emart.service';
import { Item } from '../../emart/item';
import { Category } from '../../emart/category';
import { SubCategory } from '../../emart/sub-category';


@Component({
  selector: 'app-seller-itemdisplay',
  templateUrl: './seller-itemdisplay.component.html',
  styleUrls: ['./seller-itemdisplay.component.css']
})
export class SellerItemdisplayComponent implements OnInit {
  item: any;
  category: Category;
  subCategory: SubCategory;

  constructor(protected activatedRoute: ActivatedRoute,
    protected emartService: EmartService,
    protected router: Router) { }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .subscribe(
        (param) => {
          let id = param.get('iId');
          this.emartService.getItem(id).subscribe(
            (response: any) => {
              this.item = response;

            }
          );

        }
      );
  }

  //------------update Item and navigating to seller-itemlist------//
  updateItem(item){
    this.emartService.updateItem(this.item).subscribe(
      (response:any)=>{
        this.router.navigate(['/seller-itemlist']);
      }
    )
  
  }

}
