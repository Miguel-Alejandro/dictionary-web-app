import { Component } from '@angular/core';
import { IconsService } from 'src/app/services/icons/icons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public iconSrv: IconsService){}

}
