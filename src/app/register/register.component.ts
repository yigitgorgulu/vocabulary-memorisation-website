import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  usernameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.registerForm = _fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.usernameControl = <FormControl>this.registerForm.controls['username'];
    this.emailControl = <FormControl>this.registerForm.controls['email'];
    this.passwordControl = <FormControl>this.registerForm.controls['password'];
  }

  submit() {
    let username: string = this.usernameControl.value;
    let email: string = this.emailControl.value;
    let password: string = this.passwordControl.value;

    this._auth.register(username, email, password);

    this._router.navigate(['/dashboard']);
  }

  ngOnInit(): void { }

}
