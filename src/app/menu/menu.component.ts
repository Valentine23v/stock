import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Array<Menu>;
  currentmenuId:number;

  constructor(public router:Router) { }

  ngOnInit() {
    this.menus=[
      new Menu(1,'首页','dashboard'),
      new Menu(2,'管理','stock')
    ];

  }
  nav (menu:Menu){
    this.router.navigateByUrl(menu.link);
    this.currentmenuId=menu.id;//将页面的id赋值到currentmenuId
  }

}

export class Menu {
  constructor(public id:number,
              public name:string,
              public link:string
  ){}
}
