import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add', component: AddComponent},
    {path: 'list', component: ListComponent},
    {path: 'edit', component: EditComponent},
    {path: 'visualization', component: VisualizationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }