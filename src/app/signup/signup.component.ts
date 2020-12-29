import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  form=new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    E_mail: new FormControl(),
    phone: new FormControl()
  });
 

}
