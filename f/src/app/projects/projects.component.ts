import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Projects } from '../projects';
import { ProjectService } from '../services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [MatPaginatorModule, HttpClientModule, AnimateOnScrollDirective]
})
export class ProjectsComponent implements OnInit {

  page = 0;
  size = 6;
  trackby: any;
  addProjectsHere =<Projects[]>[];
  projects: Projects[] = [];
  filteredProjects: Projects[] = [];
  selectedTag: string = 'All';
  uniqueTags: string[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      this.filteredProjects = data; // Initialize filtered with all
      this.extractTags();
      this.getProjects({
        pageIndex: this.page,
        pageSize: this.size,
      });
    });
  }

  extractTags() {
    const tags = new Set<string>();
    this.projects.forEach(p => p.tags?.forEach(t => tags.add(t)));
    this.uniqueTags = ["All", ...Array.from(tags)];
  }

  filterProjects(tag: string) {
    this.selectedTag = tag;
    this.page = 0; // Reset to first page
    
    if (tag === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.tags?.includes(tag));
    }

    this.getProjects({
      pageIndex: this.page,
      pageSize: this.size
    });
  }

  getProjects(obj: { pageIndex: number; pageSize: number; }){
    this.page = obj.pageIndex; // Update current page
    this.size = obj.pageSize;  // Update current size
    
    let index = 0;
    let startingIndex = obj.pageIndex * obj.pageSize;
    let lastIndex = startingIndex + obj.pageSize;

    // Filter from the filteredProjects list, NOT the master projects list
    this.addProjectsHere = this.filteredProjects.filter(() =>{
      index++;
      return (index > startingIndex && index <= lastIndex) ? true : false;
    });
  }
}
