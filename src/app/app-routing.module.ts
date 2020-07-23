import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PathAComponent } from "./components/pathAComponent/pathAComponent.component";
import { PathBComponent } from "./components/pathBComponent/pathBComponent.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pageA', component: PathAComponent },
  { path: 'pageB', component: PathBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
