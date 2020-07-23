import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { PathAComponent } from "./components/pathAComponent/pathAComponent.component";
import { PathBComponent } from "./components/pathBComponent/pathBComponent.component";

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './servcies/api.service';
import { ComputeService } from './servcies/compute.service';
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathAComponent,
    PathBComponent,
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
    ],
  providers: [
    ApiService,
    ComputeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
