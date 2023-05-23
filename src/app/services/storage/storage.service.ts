import { Injectable } from '@angular/core';
import { StorageGet, StorageSet } from 'src/app/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements StorageGet, StorageSet {

  constructor() { }

  public async saveItem(key: string, value: any): Promise<void> {
    await localStorage.setItem(key, value);
  }

  public async getItem(key: string): Promise<any> {
    return await localStorage.getItem(key)
  }
}
