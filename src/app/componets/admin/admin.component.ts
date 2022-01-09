import { ServicesService } from './../../services/services.service';
import { PredictData } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  typePass: string = '';
  show: boolean = true
  data: PredictData[] = []
  constructor(private $: ServicesService) { }

  ngOnInit(): void {
  }

  checkPassword() {
    if ('parth499' === this.typePass) {
      this.show = !this.show;
      this.$.db.getData().subscribe(x => { x.docs.forEach(x => { this.data.push(x.data() as PredictData) }) })

    }
  }
}

