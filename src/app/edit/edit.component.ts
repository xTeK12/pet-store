import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { MyService } from 'src/service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private router:Router, private formBuilder: FormBuilder, private myService:MyService){}
  
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
    file: new FormControl('')
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
  get file(){
    return this.editPetForm.get('file')
  }
  ngOnInit(){
    this.editPetForm = this.formBuilder.group({
      name:'',
      category: '',
      status: '',
      ID: '',
      description: '',
      file: '',
    })
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
   this.formValues.file = this.editPetForm.get('file').value

  }
 

}
