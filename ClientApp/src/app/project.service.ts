import { Injectable } from '@angular/core';
import { Project } from './Project';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Tasks } from './Tasks';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private ProjectsUrl = 'api/Projects';  // URL to web api
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.ProjectsUrl);
  }

  getProject(id: number): Observable<Project> {


    return this.http.get<Project>(this.ProjectsUrl + "/" + id);
    
  }
  addProject(project: Project): Observable<Project> {

    return this.http.post<Project>(this.ProjectsUrl, project, this.httpOptions)

  }

  getTasks(id: number): Observable<Tasks[]> {


    return this.http.get<Tasks[]>(this.ProjectsUrl + "/Tasks/" + id);

  }

   
}
