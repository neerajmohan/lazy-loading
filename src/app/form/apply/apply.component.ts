import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private form: FormService ) { }
  regForm = this.fb.group({
    name: ['',Validators.required,],
    dob: ['',Validators.required],
    qualification: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required,Validators.minLength(10)]],
    address: ['',Validators.required],
    fresher:['',Validators.required],
    experience:this.fb.array([
      this.addExpFormGroup()
    ])
  });

  ngOnInit(): void { }
  onSubmit(){
    // console.warn(this.regForm.value);
    this.form.setValue(this.regForm);

    this.router.navigateByUrl('/response');
  }
  addExpButtonClick():void{
    (<FormArray>this.regForm.get('experience')).push(this.addExpFormGroup());
  }
  addExpFormGroup():FormGroup{
    return this.fb.group({
      skill: [''],
      years: ['']
    });
  }


}
