import { Injectable } from '@angular/core';
import { faPlay, faStop, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class IconsService {
  public icons = {
    faPlay,
    faStop,
    faClose,
    faGithub
  };
}
