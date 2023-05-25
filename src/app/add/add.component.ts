import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { MyService } from 'src/service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  petForm: FormGroup = new FormGroup({
    name: new FormControl('',
    [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    ID: new FormControl('',Validators.required),
    status: new FormControl('available',Validators.required),
    category: new FormControl('not selected'),
    description: new FormControl(''),
  })

  get name(){
    return this.petForm.get('name')
  }
  get ID(){
    return this.petForm.get('ID')
  }
  get status(){
    return this.petForm.get('status')
  }
  get category(){
    return this.petForm.get('category')
  }
  get description(){
    return this.petForm.get('description')
  }

formValues:any = {
  
}



  messageSuccess:boolean = false
  messageWarning:boolean = false


  constructor(private formBuilder: FormBuilder,
    private myService: MyService,
    private router : Router,
    
    ){}

ngOnInit(){
  this.petForm = this.formBuilder.group({
    name: '',
    category: 'not selected',
    status: 'available',
    ID: '',
    description: '',
  })
}

onInputChange(){
  if(this.petForm.valid){
  this.messageWarning=false
}
  else {this.messageWarning=true
    this.messageSuccess=false
  }
}

submitForm(){
  
   if(this.petForm.valid){
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

this.formValues.index =this.myService.getListLength() +1,
this.formValues.name = this.petForm.get('name').value
this.formValues.category = this.petForm.get('category').value
this.formValues.status = this.petForm.get('status').value
this.formValues.ID = this.petForm.get('ID').value
this.formValues.description = this.petForm.get('description').value
if(this.formValues.name!=='' && this.formValues.status!==''){
  this.myService.addItem(this.formValues)
  this.formValues={}
}

}


}
