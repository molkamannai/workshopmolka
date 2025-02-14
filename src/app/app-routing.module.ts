import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'residnce', component:ResidencesComponent},
  {path:'home', component:HomeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
