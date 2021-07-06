import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, Validators
} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.loginForm = _fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.usernameControl = <FormControl>this.loginForm.controls['username'];
    this.passwordControl = <FormControl>this.loginForm.controls['password'];
  }

  submit() {
    let username: string = this.usernameControl.value;
    let password: string = this.passwordControl.value;

    this._auth.login(username, password);

    this._router.navigate(['/dashboard']);
  }

  ngOnInit(): void { }

}
