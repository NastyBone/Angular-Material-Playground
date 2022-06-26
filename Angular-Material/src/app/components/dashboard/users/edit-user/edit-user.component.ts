import { Token } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  index!: number;
  gender: any = ['Male', 'Female'];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  saveUser() {
    const user: Users = this.form.value;
    this.usersService.saveEdit(this.index, user);
    this.usersService.getUsers();
    this.router.navigate(['dashboard/users']);
    this._snackBar.open('Edited user', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params['id'];
    const data = this.usersService.startEditing(this.index);
    if (data) {
      this.form = this.formBuilder.group({
        username: [data.username, Validators.required],
        firstName: [data.firstName, Validators.required],
        lastName: [data.lastName, Validators.required],
        gender: [data.gender, Validators.required],
      });
    }
  }
}
