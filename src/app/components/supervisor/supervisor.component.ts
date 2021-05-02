import { Component, Input, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss'],
})
export class SupervisorComponent implements OnInit {

  @Input() supervisor: any;
  
  constructor(
    private emailComposer: EmailComposer
  ) { }

  ngOnInit() {}

  mailLecturer(email: any){
    this.emailComposer.open({
      to : email
    })
  }

}
