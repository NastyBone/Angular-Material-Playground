import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) {}
  menu: Menu[] = [];

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.getData().subscribe((data) => {
      this.menu = data;
    });
  }
}
