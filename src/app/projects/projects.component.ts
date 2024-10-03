import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Projects } from '../projects';
@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [MatPaginatorModule]
})
export class ProjectsComponent {
  page = 0;
  size = 6;
  trackby: any;
  addProjectsHere =<Projects[]>[];
  projects = <Projects[]>[
    {
      id: 0,
      project_name: 'Ecommerce Store',
      imageUrl: '/front-end/portfolio-site/src/assets/images/comingsoonimg.jpg',
      url: 'https://github.com/KingDrahggo/eCommerce',
    },
    {
      id: 1,
      project_name: 'Service Connect Start Up',
      imageUrl: '/front-end/portfolio-site/src/assets/images/comingsoonimg.jpg',
      url: 'https://github.com/Johnathan238/Service-Connect',
    },
    {
      id: 2,
      project_name: 'Original Portfolio Site',
      imageUrl: '/front-end/portfolio-site/src/assets/images/comingsoonimg.jpg',
      url: 'https://github.com/Johnathan238/Service-Connect',
    },
    {
      id: 3,
      project_name: 'Tic Tac Toe Game',
      imageUrl: '/front-end/portfolio-site/src/assets/images/tictactreact.png',
      url: 'https://github.com/KingDrahggo/tictactoereact',
    },
    {
      id: 4,
      project_name: 'Akira Movie Application',
      imageUrl: '/front-end/portfolio-site/src/assets/images/akira-movie-tn.png',
      url: 'https://github.com/KingDrahggo/Akira-Movie-App',
    },
    {
      id: 5,
      project_name: 'Trivia Quiz Application',
      imageUrl: '/front-end/portfolio-site/src/assets/images/triviaimg.PNG',
      url: 'https://github.com/KingDrahggo/Akira-Movie-App',
    },
    {
      id: 6,
      project_name: 'To Do List Application',
      imageUrl: '/front-end/portfolio-site/src/assets/images/to-do-list.png',
      url: 'https://github.com/KingDrahggo/Akira-Movie-App',
    },
    {
      id: 7,
      project_name: 'Pig Latin Application',
      imageUrl: '/front-end/portfolio-site/src/assets/images/piglatinimg.jpg',
      url: 'https://github.com/KingDrahggo/Akira-Movie-App',
    }
  ];
  ngOnIgnit(){
this.getProjects({
  pageIndex: this.page,
  pageSize: this.size,
})
  }
  getProjects(obj: { pageIndex: number; pageSize: number; }){
  let index = 0;
  let startingIndex = obj.pageIndex * obj.pageSize;
  let lastIndex = startingIndex + obj.pageSize;

  this.addProjectsHere = this.projects.filter(() =>{
    index++;
    return (index > startingIndex && index <= lastIndex) ? true : false;
  });

}




}
