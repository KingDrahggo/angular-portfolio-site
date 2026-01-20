import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Projects } from '../projects';
import { ProjectService } from '../services/project.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [MatPaginatorModule, HttpClientModule]
})
export class ProjectsComponent implements OnInit {

  page = 0;
  size = 6;
  trackby: any;
  addProjectsHere =<Projects[]>[];
  projects: Projects[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      this.getProjects({
        pageIndex: this.page,
        pageSize: this.size,
      });
    });
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
