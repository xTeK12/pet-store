import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent {
infoPet:any[]=[]

  

  constructor(private myService:MyService){}

  ngOnInit(){
this.infoPet=this.myService.infosPet
  }

}
