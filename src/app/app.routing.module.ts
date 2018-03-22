import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutRoutingModule} from './about/about.routing.module';
import {HomeRoutingModule} from './home/home.routing.module';
import {BlogRoutingModule} from './blog/blog.routing.module';
import {ContactRoutingModule} from './contact/contact.routing.module';
import {ProjectsRoutingModule} from './projects/project.routing.module';

const routes: Routes = [
  // {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    AboutRoutingModule,
    HomeRoutingModule,
    BlogRoutingModule,
    ContactRoutingModule,
    ProjectsRoutingModule
  ]
})
export class AppRoutingModule {
}
