import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.scss']
})
export class PatientformComponent implements OnInit {
  public patientForm: FormGroup;
  public symtoms = new FormControl();
public selected:any[]
  symtomList: string[] = ['Fever', 'Fatigue', 'Headaches', 'Skin problem'];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.patientForm = this.fb.group({PatientName:[''], Gender:[], Age:[''],Address:[''],City:[''],Email:[''],MobileNumber:[''],symtoms:['']});

  }

  filter(event:any){
console.log();
}
  SaveForm(){
    var patients =  localStorage.getItem("isLoggedIn");
    var data = this.patientForm.value;
    localStorage.setItem("patients",data);
  }
}
