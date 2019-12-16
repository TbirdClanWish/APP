import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NavbarComponent} from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
  
    ProjectsComponent,
    ProjectDetailComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProjectsComponent, pathMatch: 'full' },

      { path: 'projects', component: ProjectsComponent },
      { path: 'detail/:id', component: ProjectDetailComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
