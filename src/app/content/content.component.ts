import { Component, OnInit } from '@angular/core';
import {Router, NavigationCancel, NavigationEnd} from "@angular/router";
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle='';
  pageDesc='';

  constructor(public router:Router) {
    //监听路由事件
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd)=>{
       if (event.url=='/dashboard'){
         this.pageTitle='首页';
         this.pageDesc='';
       }else if(event.url=='/stock'){
         this.pageTitle='股票信息管理';
         this.pageDesc='进行管理';

       }
      })
  }

  ngOnInit() {
  }

}
