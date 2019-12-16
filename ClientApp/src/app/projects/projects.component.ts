import { Component, OnInit } from '@angular/core';

import { Project } from '../Project';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  Projects: Project[];

  constructor(private projectService: ProjectService) {
 }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.Projects = projects);
  }
  
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    let _project = new Project(title);
    this.projectService.addProject(_project)
      .subscribe(project => {
        this.Projects.push(project);
      });
  }

}
