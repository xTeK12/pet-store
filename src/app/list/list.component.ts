import { Component,Input, OnInit } from '@angular/core';
import { MyService } from 'src/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

itemList:any[] =[]
filteredList:any[]=[]
editedList:any[]=[]
selectedStatus: string = 'all'
i:number
selectedRowIndex:number = -1
selectedRowData: any = null
messageRemove = false



constructor(private myService:MyService,
  private route: ActivatedRoute, private router: Router){
}

ngOnInit(){
  this.itemList= this.myService.itemsList
  this.filteredList=this.itemList
  this.editedList=this.myService.editList

  
}


onSelectStatus(){
  const selectElement = document.getElementById('statusSelect') as HTMLSelectElement;
  const selectedValue = selectElement.value;
  this.selectedStatus = selectedValue;
  this.filterList();
}

ngAfterViewInit(){
  const selectElement = document.getElementById('statusSelect') as HTMLSelectElement;
  selectElement.addEventListener('change', () => {
    this.onSelectStatus();
  });
}

filterList(){
  if (this.selectedStatus === 'all') {
    this.filteredList = this.itemList;
  } else {
    this.filteredList = this.itemList.filter(item => item.status === this.selectedStatus);
  }
}
onDelete(rowIndex:number){
  this.selectedRowIndex=rowIndex
  this.selectedRowData=this.filteredList[rowIndex]
  const modal = document.getElementById('deleteModal') as HTMLElement
  modal.style.display = 'block'
  
}



confirmDelete(){
  const modal = document.getElementById('deleteModal') as HTMLElement
  modal.style.display='none'
  if(this.selectedRowIndex > -1){
    this.filteredList.splice(this.selectedRowIndex,1)
    this.selectedRowIndex=-1
    this.selectedRowData=null
    this.messageRemove=true
    setTimeout(() =>{
      this.messageRemove=false
    },1000)
    this.myService.infosPet=[]
  }
}

cancelDelete(){
  const modal = document.getElementById('deleteModal') as HTMLElement
  modal.style.display='none'
}

onView(rowIndex:number){
  this.selectedRowIndex=rowIndex
  this.selectedRowData=this.filteredList[rowIndex]
  if(this.selectedRowIndex>-1){
    this.myService.infosPet=[]
    this.myService.addInfo(this.selectedRowData)
    this.router.navigate(['/visualization'])
  }
}
onEdit(rowIndex:number){
  this.selectedRowIndex=rowIndex
  this.selectedRowData=this.filteredList[rowIndex]
  if(this.selectedRowIndex>-1){
    this.myService.addInfo(this.selectedRowData)
    this.router.navigate(['/edit'])
  }

}

}

