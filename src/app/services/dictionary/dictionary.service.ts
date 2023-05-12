import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BuilderPatternService } from '../builder_pettern/builder-pattern.service';
import { environment } from '../../../environments/environment.development';
import { Dictionary } from 'src/app/interfaces/dictionary';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(
    private http: HttpClient,
    private builder: BuilderPatternService
  ) {}

  public search(word: string): Observable<Dictionary> {
    return this.http
      .get(environment.apiUrl + word)
      .pipe(
        map((response: any) => this.builder.builderDictionaryClass(response[0]))
      );
  }
}
