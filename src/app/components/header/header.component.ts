import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconsService } from 'src/app/services/icons/icons.service';
import { ModeService } from 'src/app/services/mode/mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('modeButton', { static: true }) modeButton: ElementRef;
  private body = document.querySelector('body');

  constructor(public iconSrv: IconsService, private modeSrv: ModeService) {}

  ngOnInit(): void {
    this.checkModeStatus();
  }

  public async changeMode($event: any): Promise<void> {
    if($event.target.checked){
      this.modeSrv.changeMode('dark');
      this.addStyles();
    }
    if(!$event.target.checked){
      this.modeSrv.changeMode('light');
      this.removeStyles();
    }
    
  }

  private addStyles(): void {
    this.body?.classList.add('dark--mode');
  }

  private removeStyles(): void {
    this.body?.classList.remove('dark--mode');
  }

  private async checkModeStatus(): Promise<void> {
    const modeValue = await this.modeSrv.getMode();

    if (!this.modeButton.nativeElement.checked || modeValue === 'light') {
      this.modeSrv.changeMode('light');
      this.modeButton.nativeElement.checked = false;
      this.removeStyles();
    }
    if (this.modeButton.nativeElement.checked || modeValue === 'dark') {
      this.modeSrv.changeMode('dark');
      this.modeButton.nativeElement.checked = true;
      this.addStyles();
    }
  }
}
