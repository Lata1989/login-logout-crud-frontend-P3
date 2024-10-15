import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoutButtonComponent } from "../logout-button/logout-button.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, LogoutButtonComponent, MatMenuModule, MatButtonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
