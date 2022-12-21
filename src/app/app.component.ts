import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  addMoreInput()
  {
    (this.saveForm.get('addinput') as FormArray).push(new FormControl());

  }
  count=0;
  save() {
    var pid = this.count++;
    var features= this.saveForm.controls["features"] as FormArray;
    var subfeatures= this.saveForm.controls["subfeatures"] as FormArray;

    var cname = this.saveForm.value.cname
    var adrs = this.saveForm.value.adrs
    var web = this.saveForm.value.web
    var addinput = this.saveForm.controls["addinput"] as FormArray;

    if (this.saveForm.valid) {
      //check validation
      const result = this.ds.save(cname, adrs, web, addinput, pid, features, subfeatures)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)

          }

        },
          (result) => {
            alert(result.error.message)

          })
    }

    // console.log(cname);
    // console.log(adrs);
    // console.log(web);

    // console.log(pid);
    // console.log(features);

    // console.log(subfeatures);
    // console.log(addinput);







  }
  
}
