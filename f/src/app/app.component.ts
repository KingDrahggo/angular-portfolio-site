
import { Component, HostListener } from '@angular/core';

import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ServicesComponent } from './services/services.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,

    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    ServicesComponent,
    NavbarComponent,
  RouterModule,
CommonModule,
ReactiveFormsModule]
})
export class AppComponent {
  title = 'portfolio-site';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  }
}
