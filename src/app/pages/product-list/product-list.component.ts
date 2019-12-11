import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Object[] = [
    { name: "土豆", description: "2块一斤，好吃不贵" },
    { name: "胡萝卜", description: "1块一斤，好吃不贵" },
    { name: "香菇", description: "4块一斤，好吃不贵" },
  ];
  constructor() { }

  ngOnInit() {
  }
  share(num) {
    alert("shart" + num)
  }
}
