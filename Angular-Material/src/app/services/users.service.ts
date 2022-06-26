import { Injectable } from '@angular/core';
import { Users } from '../components/dashboard/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: Users[] = [
    {
      username: 'NastyBone',
      firstName: 'Jose',
      lastName: 'Prieto',
      gender: 'Male',
    },

    {
      username: 'Rightless',
      firstName: 'Ricardo',
      lastName: 'Diaz',
      gender: 'Male',
    },

    {
      username: 'DarkVitur',
      firstName: 'Juan',
      lastName: 'Santil',
      gender: 'Male',
    },

    {
      username: 'Naneez',
      firstName: 'Victor',
      lastName: 'Hernandez',
      gender: 'Male',
    },

    {
      username: 'SuricatoAviones',
      firstName: 'Luis',
      lastName: 'Gutierrez',
      gender: 'Male',
    },
    {
      username: 'ThePersoX',
      firstName: 'Daniel',
      lastName: 'Azocar',
      gender: 'Male',
    },
    {
      username: 'Castle',
      firstName: 'Carlos',
      lastName: 'Castillo',
      gender: 'Male',
    },
    {
      username: 'LJRR99',
      firstName: 'Luis',
      lastName: 'Rivero',
      gender: 'Male',
    },
  ];
  constructor() {}

  getUsers() {
    return this.userList.slice();
  }

  addUser(user: Users) {
    this.userList.unshift(user);
  }

  deleteUser(index: number) {
    this.userList.splice(index, 1);
  }

  startEditing(i: number) {
    return this.userList[i];
  }

  saveEdit(i: number, newUser: Users) {
    this.userList[i] = newUser;
  }
}
