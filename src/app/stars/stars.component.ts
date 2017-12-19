import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating:number=0;

  stars:boolean[];

  constructor() { }

  ngOnInit() {
    this.stars=[]//初始化
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);//传进来的参数返回是或者否在前台控制class
    };

  }

}
