
import { Component } from '@angular/core';
@Component({//装饰器-表明它下面的类是一个组件。它提供了有关该组件的元数据，包括它的模板、样式和选择器。
  selector: 'app-root',//用于标识该组件。该选择器是当 Angular 组件在页面中渲染出 HTML 元素时使用的名字。按照惯例，Angular 组件选择器会以前缀 app- 开头，后跟组件名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular';

}
