import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss'],
})
export class SupervisorComponent implements OnInit {

  @Input() supervisor: any;
  
  constructor() { }

  ngOnInit() {}

}
