import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../components/dashboard/interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Menu[]> {
    return this.http.get<Menu[]>('../../assets/data/menu.json');
  }
}
