import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  saveForm = this.fb.group({

    cname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    adrs: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    pid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

    web: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    addinput: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    features: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    subfeatures: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    morefeat: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    moresubfeat: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    moreinput: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private ds: DataService, private fb: FormBuilder) { }
  div1: boolean = false;
  div2: boolean = false;
  div3: boolean = false;
  count = 1;
  selectedFeature: string = '';
  selectedSubFeature:string='';
  

  ngOnInit(): void {
  }
  
  save() {
var pid=this.count++;
var features=this.selectedFeature
var subfeatures=this.selectedSubFeature
    var cname = this.saveForm.value.cname
    var adrs = this.saveForm.value.adrs
    var web = this.saveForm.value.web
    var addinput = this.saveForm.value.addinput
    var morefeat = this.saveForm.value.morefeat
    var moresubfeat = this.saveForm.value.moresubfeat
    var moreinput = this.saveForm.value.moreinput

    
    if (this.saveForm.valid) {
      //check validation
      const result = this.ds.save(cname, adrs, web, addinput, pid, features, subfeatures, morefeat, moresubfeat, moreinput)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)

          }
          this.count++;

        },
          (result) => {
            alert(result.error.message)

          })
    }
    
    console.log(cname);
    console.log(adrs);
console.log(web);

    console.log(pid);
console.log(features);
console.log(morefeat);

console.log(subfeatures);
console.log(moresubfeat);
console.log(addinput);

console.log(moreinput);



  


  }
  add1() {
    this.div1 = true;

  }
  add2() {
    this.div2 = true;
  }
  add3() {
    this.div3 = true;
  }
  vanish2() {
    this.div2 = false
  }
  vanish1() {
    this.div1 = false
  }
  vanish3() {
    this.div3 = false
  }
  featureChange(event:any)
  {
    this.selectedFeature = event.target.value;
 
  }
  subfeatureChange(event:any)
  {
    this.selectedSubFeature = event.target.value;
 
  }
}
