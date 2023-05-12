import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public emitSearch($event: any) {
    this.search.emit($event.target.value)
  }

}
