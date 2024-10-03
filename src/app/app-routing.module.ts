import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';

import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents =
[AboutComponent,
  ContactMeComponent,
  ProjectsComponent,
  ServicesComponent,
  SkillsComponent]
