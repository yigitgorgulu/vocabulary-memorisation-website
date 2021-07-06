import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, Validators
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.usernameControl = <FormControl>this.loginForm.controls['username'];
    this.passwordControl = <FormControl>this.loginForm.controls['password'];
  }

  submit() {
    let username: string = this.usernameControl.value;
    let password: string = this.passwordControl.value;

    this.auth.login(username, password);
  }

  ngOnInit(): void { }

}
