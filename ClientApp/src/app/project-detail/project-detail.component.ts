import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../Project';
import { ProjectService } from '../project.service';
import { Tasks } from '../Tasks';
import { TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  
  

  

  @Input() project: Project; tasks :Tasks[];
    constructor(
      private route: ActivatedRoute,
      private projectService: ProjectService,
      private location: Location,
      private taskService: TasksService
    ) { }
    ngOnInit(): void {
      this.getProject();
      this.getTasks();
    }

    getProject(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.projectService.getProject(id)
        .subscribe(project => this.project = project);
    }
  getTasks(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getTasks(id)
      .subscribe(tasks => this.tasks = tasks);
  }

    goBack(): void {
      this.location.back();
    }
  add(title: string): void {
    const id = +this.route.snapshot.paramMap.get('id');
    let _task = new Tasks(title,id);


      this.taskService.addTask(_task)
        .subscribe(task => {
          this.tasks.push(task);
        });
    }

  }


