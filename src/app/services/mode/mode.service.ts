import { Injectable } from '@angular/core';
import { ModeChange, ModeGet } from 'src/app/interfaces/mode';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModeService implements ModeChange, ModeGet {

  private modeStatus: 'light' | 'dark';

  constructor( private storageSrv: StorageService ) { }

  public async changeMode(mode:  'light' | 'dark'): Promise<void> {
    this.modeStatus = mode;
    this.storageSrv.saveItem('modePage', this.modeStatus);
  }

  public async getMode(): Promise< 'light' | 'dark'>{ 
    return this.storageSrv.getItem('modePage');
   }

}
