import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import {Routes, RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { StockFormComponent } from './stock/stock-form/stock-form.component';

const routeConfig:Routes = [
  {path: '',redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'stock',component:StockManageComponent},
  {path: 'stock/:id',component:StockFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
