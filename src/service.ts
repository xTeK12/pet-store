import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyService {
  itemsList: any[] = [];
  infosPet:any[] = []
  editList:any[]=[]

  addItem(item: any) {
    this.itemsList.push(item)
  }


  addInfo(informations:any){
    this.infosPet.push(informations)
  }
  
  getListLength(){
    return this.itemsList.length
  }
getList(){
  return this.itemsList
}
}
