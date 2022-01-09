import { ServicesService } from 'src/app/services/services.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserPref } from 'src/app/models/models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  userPref: UserPref = new UserPref();

  voice = this.$.voice

  constructor(public $: ServicesService, private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) data: string) {
    console.log(data)
  }

  ngOnInit(): void {

    this.userPref = new UserPref();
    this.userPref.language = this.voice.lang
  }

  save() {
    this.$.ls.setCollection('userpref', this.userPref)
    this.userPref = new UserPref();
    this.dialogRef.close('i got close')
  }

}
