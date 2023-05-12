import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Error } from 'src/app/interfaces/error';
import { IconsService } from 'src/app/services/icons/icons.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() error: Error;
  @Input() type: 'success'| 'error';
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public iconSrv: IconsService){}

  public closeAlert(): void {
    this.close.emit(true);
  }

}
