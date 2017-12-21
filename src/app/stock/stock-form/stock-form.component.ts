import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;
  constructor() { }

  ngOnInit() {
    this.stock=new Stock(1,"第1支股票",10,3.5,"描述一下",["类型A","类型B"])
  }

}
