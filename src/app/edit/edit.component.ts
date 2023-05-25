import {  AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { MyService } from 'src/service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,AfterViewChecked{

  constructor(private router:Router, private myService:MyService, private cdr:ChangeDetectorRef){}
  
  messageSuccess:boolean = false
  messageWarning:boolean = false
  infoPet:any[]=[]
  formValues:any = {

  }
  
  editPetForm: FormGroup = new FormGroup({
    name: new FormControl('',
    [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    ID: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    category: new FormControl(''),
    description: new FormControl(''),
  })

  get name(){
    return this.editPetForm.get('name')
  }
  get ID(){
    return this.editPetForm.get('ID')
  }
  get status(){
    return this.editPetForm.get('status')
  }
  get category(){
    return this.editPetForm.get('category')
  }
  get description(){
    return this.editPetForm.get('description')
  }
  ngOnInit(){
   
    this.infoPet=this.myService.infosPet
  }

  onInputChange(){
    if(this.editPetForm.valid){
    this.messageWarning=false
  }
    else {this.messageWarning=true
      this.messageSuccess=false
    }
  }

ngAfterViewChecked() {
    
    // this.cdr.detectChanges()
}  

  onSave(){
    
    if(this.editPetForm.valid){
     this.messageSuccess=true
     this.messageWarning=false
   }else{
     this.messageWarning=true
     this.messageSuccess=false
   }
 
   if(this.messageSuccess===true){
     setTimeout(() =>{
       this.router.navigate(['/list'])
     },1000)
   }
   this.formValues.name = this.editPetForm.get('name').value
   this.formValues.category = this.editPetForm.get('category').value
   this.formValues.status = this.editPetForm.get('status').value
   this.formValues.ID = this.editPetForm.get('ID').value
   this.formValues.description = this.editPetForm.get('description').value
   console.log(this.formValues)
  }

}
