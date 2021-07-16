import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
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

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.form = _fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  convert(x: AbstractControl): FormControl {
    return <FormControl>x;
  }

  submit() {
    let username: string = this.form.controls.username.value;
    let email: string = this.form.controls.email.value;
    let password: string = this.form.controls.password.value;

    this._auth.register(username, email, password, this.onRegisterSuccess, this);
  }

  onRegisterSuccess() {
    this._router.navigate(['/dashboard']);
  }

  ngOnInit(): void { }

}
