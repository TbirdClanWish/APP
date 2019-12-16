import { Injectable } from '@angular/core';
import { Project } from './Project';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Tasks } from './Tasks';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private ProjectsUrl = 'api/Tasks';  // URL to web api

  addTask(task: Tasks): Observable<Tasks> {

    return this.http.post<Tasks>(this.ProjectsUrl, task, this.httpOptions)

  }


}
