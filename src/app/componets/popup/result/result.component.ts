import { ServicesService } from 'src/app/services/services.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PredictData, UserPref } from 'src/app/models/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  change: boolean = false
  res: PredictData = new PredictData()
  changeLang: any
  userPref: UserPref = new UserPref();

  constructor(public $: ServicesService, private dialogRef: MatDialogRef<ResultComponent>, @Inject(MAT_DIALOG_DATA) data: PredictData) {
    this.res = data
  }

  ngOnInit(): void {
    console.log(this.res)
    this.changeLang = this.$.voice.lang

  }
  toggle() {
    this.change = !this.change
  }
  setLang() {
    this.userPref = this.$.ls.getCollection('userpref')
    let newObj: any = {}
    newObj.name = this.userPref.name
    newObj.language = this.changeLang
    this.$.ls.setCollection('userpref', newObj)
  }
  changeLanguage() {

    this.$.voice.init()
    this.userPref = new UserPref()
    this.dialogRef.close();
  }

}
