import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'contact-me',
        loadComponent: () => import('./contact-me/contact-me.component').then(m => m.ContactMeComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'skills',
        loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

export default routeConfig;

