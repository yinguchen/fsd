import { Component, OnInit } from '@angular/core';
import { Report } from '../model/report';
import { ReportService } from '../services/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
 
  public StartDate: any;//开始时间
  public EndDate: any;//结束时间
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
    height: '32px',
    indicateInvalidDate: false,
    editableDateField: false
  };

  //事件
  loadDate(){
    console.log('this.StartDate:',this.StartDate)
    console.log('this.EndDate:',this.EndDate)
  }
  

//假数据
tableList = [
  { name: '123', price: 120, num: 3 },
  { name: '123', price: 120, num: 3 },
  { name: '123', price: 120, num: 3 },
  { name: '123', price: 120, num: 3 },
  { name: '123', price: 120, num: 3 },
  { name: '123', price: 120, num: 3 }
];
tablePageList = [];  //分页后前台显示数据
pageNo = 1; //当前页码
preShow = false; //上一页
nextShow = true; //下一页
pageSize = 5; //单页显示数
totalCount = 0; //总页数
pageSizes = [5, 10, 15]; 
curPage = 1; //当前页

ngOnInit() {
  this.getPageList();
}
getPageList() {
  if (this.tableList.length >= 1) {
    if (this.tableList.length % this.pageSize === 0) {
      this.pageNo = Math.floor(this.tableList.length / this.pageSize);
    } else {
      this.pageNo = Math.floor(this.tableList.length / this.pageSize) + 1;
    }
    if (this.pageNo < this.curPage) {
      this.curPage = this.curPage - 1;
    }
    if (this.pageNo === 1 || this.curPage === this.pageNo) {
      this.preShow = this.curPage !== 1;
      this.nextShow = false;
    } else {
      this.preShow = this.curPage !== 1;
      this.nextShow = true;
    }
  } else {
    this.tableList.length = 0;
    this.pageNo = 1;
    this.curPage = 1;
  }
  this.tablePageList = this.tableList.slice((this.curPage - 1) * this.pageSize, (this.curPage) * this.pageSize);

}
//点击上一页方法
showPrePage() {
  this.curPage--;
  if (this.curPage >= 1) {
    this.getPageList();
  } else {
    this.curPage = 1;
  }
}
//点击下一页方法
showNextPage() {
  this.curPage++;
  if (this.curPage <= this.pageNo) {
    this.getPageList();
  } else {
    this.curPage = this.pageNo;
  }
}
//自定义跳页方法
onChangePage(value) {
  if (value > this.pageNo) {
    confirm('超出最大页数');
  } else if (value <= 0) {
    this.curPage = 1;
    this.getPageList();
  } else {
    this.curPage = value;
    this.getPageList();
  }
}
//改变每页显示方法
onChangePageSize(value) {
  this.pageSize = value;
  this.curPage = 1;
  this.getPageList();
}

}


