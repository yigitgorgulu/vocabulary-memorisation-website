import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup, Validators
} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [ ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.form = _fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  convert(x: AbstractControl): FormControl {
    return <FormControl>x;
  }

  submit() {
    let username: string = this.form.controls.username.value;
    let password: string = this.form.controls.password.value;

    this._auth.login(username, password);

    this._router.navigate(['/dashboard']);
  }

  ngOnInit(): void { }

}
