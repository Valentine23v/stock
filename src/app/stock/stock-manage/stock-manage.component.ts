import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;
  constructor(public router:Router) { }

  ngOnInit() {//页面初始化的时候
    this.stocks=[
      new Stock(1,"第1支股票",10,3.5,"描述一下",["类型A","类型B"]),
      new Stock(2,"第2支股票",20,4,"描述一下",["类型C","类型D"]),
      new Stock(3,"第3支股票",30,2.2,"描述一下",["类型D","类型F"]),
      new Stock(4,"第4支股票",40,5,"描述一下",["类型C","类型E"]),
      new Stock(5,"第5支股票",50,4.1,"描述一下",["类型A","类型C"])
    ];
  }
  create(){
    this.router.navigateByUrl('/stock/0');
  };

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  };

}
export class Stock{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
){}
}
