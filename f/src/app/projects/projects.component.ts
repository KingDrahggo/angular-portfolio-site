import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Projects } from '../projects';
@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [MatPaginatorModule]
})
export class ProjectsComponent implements OnInit {

  page = 0;
  size = 6;
  trackby: any;
  addProjectsHere =<Projects[]>[];
  projects = <Projects[]>[
    {
      id: 0,
      project_name: 'Ecommerce Store',
      imageUrl: '/assets/images/comingsoonimg.jpg',
      url: 'https://github.com/KingDrahggo/eCommerce',
    },
    {
      id: 1,
      project_name: 'Service Connect',
      imageUrl: '/assets/images/comingsoonimg.jpg',
      url: 'https://github.com/Johnathan238/Service-Connect',
    },
    {
      id: 2,
      project_name: 'Original Portfolio Site',
      imageUrl: '/assets/images/originalps.png',
      url: 'https://github.com/KingDrahggo/portfolio-site',
    },
    {
      id: 3,
      project_name: 'Tic Tac Toe Game',
      imageUrl: '/assets/images/tictactreact.png',
      url: 'https://tictactoereact.onrender.com',
    },
    {
      id: 4,
      project_name: 'Akira Movie Application',
      imageUrl: '/assets/images/akira-movie-tn.png',
      url: 'https://github.com/KingDrahggo/Akira-Movie-App',
    },
    {
      id: 5,
      project_name: 'Trivia Quiz Application',
      imageUrl: '/assets/images/triviaimg.PNG',
      url: 'https://github.com/KingDrahggo/capstone-trivia',
    },
    {
      id: 6,
      project_name: 'To Do List Application',
      imageUrl: '/assets/images/to-do-list.png',
      url: 'https://github.com/KingDrahggo/To-Do-List-Mean',
    },
    {
      id: 7,
      project_name: 'Pig Latin Application',
      imageUrl: '/assets/images/piglatinimg.jpg',
      url: 'https://github.com/KingDrahggo/piglatin-unittesting',
    }
  ];

  ngOnInit(): void {
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
