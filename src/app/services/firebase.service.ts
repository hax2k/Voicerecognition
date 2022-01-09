import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PredictData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireservice: AngularFirestore) { }

  getData() {
    return this.fireservice.collection('data', x => x.orderBy('date', 'desc')).get();
  }

  addData(data: PredictData) {
    this.fireservice.collection('data').add({ ...data });
  }

  deleteData(id: string) {
    return this.fireservice.collection('data').doc(`${id}`).delete();
  }

}
