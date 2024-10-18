import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

const routeConfig: Routes = [
    { path: '', component: AboutComponent },
    { path: 'contact-me', component: ContactMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'skills', component: SkillsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default routeConfig;
