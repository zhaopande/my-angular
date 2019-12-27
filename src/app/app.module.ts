import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
import { RoductAlertsComponent } from './pages/roduct-alerts/roduct-alerts.component';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
   //可声明对象表,那些属于本 NgModule 的组件、指令、管道。
   declarations: [
      AppComponent,
      ProductListComponent,
      PageNotFoundComponent,
      RoductAlertsComponent,
      LoginComponent
   ],
   //那些能在其它模块的组件模板中使用的可声明对象的子集。
   exports: [],
   // 那些导出了本模块中的组件模板所需的类的其它模块。
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule

   ],
   //本模块向全局服务中贡献的那些服务的创建器。这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供商，这通常是首选方式。）
   providers: [],
   // 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
