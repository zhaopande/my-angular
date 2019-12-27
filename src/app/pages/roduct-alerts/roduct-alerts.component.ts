import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-alert',
  templateUrl: './roduct-alerts.component.html',
  styleUrls: ['./roduct-alerts.component.css']
})
export class RoductAlertsComponent implements OnInit {
  @Input() product;
  constructor(private router: Router, ) { }

  ngOnInit() {
  }
  goList() {
    this.router.navigate(['list']);
  }

}
