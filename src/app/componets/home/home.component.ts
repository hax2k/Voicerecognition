import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { PredictData, UserPref } from 'src/app/models/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isActive: boolean = false;
  text?: string;
  userPref: UserPref = new UserPref()
  ansWer: string[] = ['Yes', 'No', '50-50%']

  constructor(private $: ServicesService) {
    console.log(this.$.db.getData().subscribe((x) => { console.log(x.docs.forEach((a) => { console.log(a.data()) })) }))
  }

  ngOnInit(): void {
    this.openModel();
    this.initVoiceInput();
  }

  initVoiceInput() {
    this.$.voice.init().subscribe(() => { });
    this.$.voice.speechInput().subscribe((input) => {
      this.text = input;
    });
  }

  tap() {
    if (this.$.ls.getCollection("userpref")) {
      this.isActive = !this.isActive;
      this.isActive === true ? this.startRecording() : this.stopRecording()
    }
    else {
      this.openModel();
    }
  }

  startRecording() {
    this.text = '';
    this.$.voice.start();

  }

  stopRecording() {
    this.$.voice.stop();
    if (this.text != '') {
      let num = Math.floor(Math.random() * 3);
      this.userPref = this.$.ls.getCollection("userpref")
      let res = new PredictData()
      res.name = this.userPref.name
      res.language = this.userPref.language
      res.que = this.text
      res.ans = this.ansWer[num]
      this.$.model.openResult(res).subscribe(x => x)
      this.$.db.addData(res)
    }
    else {
      this.text = ''
    }
  }

  async openModel() {
    if (this.$.ls.getCollection("userpref")) {

      this.userPref = this.$.ls.getCollection("userpref")
    }
    else {
      this.$.model.openDialog().subscribe(x => console.log(x))
    }

  }


}
