import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { ModelmanagerService } from './modelmanager.service';
import { VoiceRecognitionService } from './voice-recognition.service';
import { StoragecollectionService } from './storagecollection.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    public voice: VoiceRecognitionService,
    public model: ModelmanagerService,
    public db: FirebaseService,
    public ls: StoragecollectionService
  ) { }
}
