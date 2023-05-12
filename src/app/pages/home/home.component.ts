import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Dictionary } from 'src/app/interfaces/dictionary';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { IconsService } from 'src/app/services/icons/icons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public searchResult: Dictionary;
  public audio: HTMLAudioElement;
  public statusAudio: boolean = false;

  constructor(
    public dictionarySrv: DictionaryService,
    public iconSrv: IconsService
  ) {}

  public playAudio() {
    const audioSrc = this.getAudioSrc();
    if (audioSrc.length > 1) this.audio = new Audio(audioSrc[1]);
    else this.audio = new Audio(audioSrc[0]);

    this.audio.play();
    this.statusAudio = true;

    setTimeout(() => {
      this.statusAudio = false;
    }, 1000);
  }

  public stopAudio() {
    this.audio.pause();
  }

  public async searchValue($event: any): Promise<void> {
    try {
      const searchServiceResult = await this.dictionarySrv.search($event);
      this.searchResult = await lastValueFrom(searchServiceResult);
      console.log(this.searchResult);
    } catch (error) {
      console.error('Ha ocurrido un error,', error);
    }
  }

  private getAudioSrc(): Array<string> {
    let audioSrc: Array<string> = new Array<string>();
    this.searchResult.phonetics.forEach((item) => {
      if (item.audio != '') audioSrc.push(item.audio);
    });

    return audioSrc;
  }
}
