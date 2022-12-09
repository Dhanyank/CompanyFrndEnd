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

    
  })

  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  add(){
    
  }
  save() {



    var cname = this.saveForm.value.cname
    var adrs = this.saveForm.value.adrs
    var web = this.saveForm.value.web
    var addinput = this.saveForm.value.addinput
    var pid = this.saveForm.value.pid
    var features = this.saveForm.value.features
    var subfeatures = this.saveForm.value.subfeatures



    if (this.saveForm.valid) {
    const result = this.ds.save(cname, adrs, web, addinput,pid,features,subfeatures)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      },
        (result) => {
          alert(result.error.message)

        })
  }
}
}
