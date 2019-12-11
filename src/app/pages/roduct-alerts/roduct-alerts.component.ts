import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './roduct-alerts.component.html',
  styleUrls: ['./roduct-alerts.component.css']
})
export class RoductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
