import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    template: `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper orange">
          <a routerLink="/home" class="brand-logo">
          <img width="100" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a routerLink="/personne">Personnes</a></li>
            <li><a routerLink="/villes">Villes </a></li>
          </ul>
        </div>
      </nav>
    </div>
`
})
export class NavbarComponent implements OnInit {
    
    constructor(private route:Router) { }

    ngOnInit(): void {}

    retour(): void {
        this.route.navigate(['/personnes']);
    }
}
