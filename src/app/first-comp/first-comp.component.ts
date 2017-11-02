import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  template: '<p> Works </p>',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
