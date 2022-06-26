import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  listUsers: Users[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'username',
    'firstName',
    'lastName',
    'gender',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private userService: UsersService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.listUsers = this.userService.getUsers();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
    this.loadUsers();
    this._snackBar.open('Deleted user', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  editUser(i: number) {
    this.router.navigate([`/dashboard/edit-user`, i]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
