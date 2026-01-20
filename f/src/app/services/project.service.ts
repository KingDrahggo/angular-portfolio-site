import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'assets/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.projectsUrl);
  }
}
