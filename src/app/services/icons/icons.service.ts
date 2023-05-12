import { Injectable } from '@angular/core';
import { faPlay, faStop, faClose } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  public icons = {
    faPlay,
    faStop,
    faClose,
  };
}
