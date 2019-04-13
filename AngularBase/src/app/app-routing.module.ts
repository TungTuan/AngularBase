import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      component: ErrorComponent
    }
  ]
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}