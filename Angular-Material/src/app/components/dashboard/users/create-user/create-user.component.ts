import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  gender: any = ['Male', 'Female'];
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  saveUser() {
    const user: Users = this.form.value;
    this.usersService.addUser(user);
    this.usersService.getUsers();
    this.router.navigate(['dashboard/users']);
    this._snackBar.open('Added user', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  ngOnInit(): void {}
}
