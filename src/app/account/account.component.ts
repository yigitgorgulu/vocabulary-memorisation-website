import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [
  ]
})
export class AccountComponent implements OnInit {

  private _info: any;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _auth: AuthService) {
    this._info = _auth.getInfo();
    this.form = _fb.group({
      'username': [this._info.username, Validators.required],
      'email': [this._info.email, Validators.required],
      'password': [this._info.password, Validators.required]
    });
  }

  submit() {
    let username: string = this.form.controls.username.value;
    let email: string = this.form.controls.email.value;
    let password: string = this.form.controls.password.value;

    // this._auth.register(username, email, password); // TODO dirty, fix
  }

  convert(x: AbstractControl): FormControl {
    return <FormControl>x;
  }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void { }

}
