import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoragecollectionService {

  constructor() { }

  getCollection(key: string) {
    return JSON.parse(localStorage.getItem(key) as string)
  }
  setCollection(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value))
  }

}
