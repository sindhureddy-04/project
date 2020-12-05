import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logForm= new FormGroup ({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('')]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('')
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),

      ] )
  });
      

}
