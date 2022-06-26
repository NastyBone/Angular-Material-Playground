import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  logIn() {
    if (this.form.value.user == 'abc' && this.form.value.password == 123) {
      this.showMessage({ message: 'Redirecting...', button: '' });
      this.clearLoading();
    } else {
      this.showMessage({ message: 'User or password invalid', button: '' });
    }

    this.form.reset();
  }

  showMessage(e: { message: string; button: string }) {
    this._snackBar.open(e.message, e.button, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  clearLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
