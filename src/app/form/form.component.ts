import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    profileForm : FormGroup;

    namePattern = '^[a-öA-ö]*$';
    emailPattern = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
    userNamePattern = '^[a-zA-Z0-9]*$';
    passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';

    constructor(){
      this.profileForm = new FormGroup({
        firstName: new FormControl('',
        [Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.namePattern)]),
        lastName: new FormControl('',
        [Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.namePattern)]),
        email: new FormControl('',
        [Validators.required,
        Validators.pattern(this.emailPattern)]),
        username: new FormControl('',
        [Validators.required,
        Validators.minLength(4),
        Validators.pattern(this.userNamePattern)]),
        password: new FormControl('',
        [Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordPattern)]),
        password2: new FormControl('',
        [Validators.required]),
        termsAndConditions: new FormControl(false,
        [Validators.requiredTrue])
      })
    }

    get firstName(){
      return this.profileForm.get('firstName')
    }
    get lastName(){
      return this.profileForm.get('lastName')
    }
    get email(){
      return this.profileForm.get('email')
    }
    get userName(){
      return this.profileForm.get('email')
    }
    get password(){
      return this.profileForm.get('password')
    }
    get password2(){
      return this.profileForm.get('password2')
    }
    get termsAndConditions(){
      return this.profileForm.get('termsAndConditions')
    }

    onSubmit(formdata: any, formDirective: FormGroupDirective): void{
      formDirective.resetForm();
      this.profileForm.reset();
    }
    

    ngOnInit(): void {

    }
}
