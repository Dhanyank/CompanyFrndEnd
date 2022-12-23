import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public saveForm: any;
  constructor(private ds: DataService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.saveForm = this.fb.group({

      cname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      adrs: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      pid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

      web: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      features: new FormArray([new FormControl()]),
      subfeatures: new FormArray([new FormControl()]),
      addinput: new FormArray([new FormControl()]),


    })

  }
  addFeatures() {
    (this.saveForm.get('features') as FormArray).push(new FormControl());
  }

  addSubFeatures() {
    (this.saveForm.get('subfeatures') as FormArray).push(new FormControl());
  }
  addMoreInput() {
    (this.saveForm.get('addinput') as FormArray).push(new FormControl());

  }

  save() {
    
    console.log(this.saveForm.value);


    if (this.saveForm.valid) {
      //check validation
      this.ds.save(this.saveForm.value)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)

          }

        },
          (error: any) => {
            console.log(error);

          }
        )
        }
  }
}








