import { Injectable } from '@angular/core';
import { Definition, Dictionary, License, Meaning, Phonetic } from 'src/app/interfaces/dictionary';
import { Builder } from 'builder-pattern';


@Injectable({
  providedIn: 'root'
})
export class BuilderPatternService {

  constructor() { }

  public builderDictionaryClass(request:any): Dictionary {
    return Builder(Dictionary)
      .word(request.word)
      .phonetics(request?.phonetics?.map((phonetics:any) =>
          Builder(Phonetic)
            .audio(phonetics.audio)
            .sourceUrl(phonetics.sourceUrl)
            .license(phonetics.license)
            .text(phonetics.text)
            .build()
        ))
      
      .meanings(request.meanings.map((meanings:any) =>
        Builder(Meaning)
          .antonyms(meanings.antonyms)
          .synonyms(meanings.synonyms)
          .definitions(meanings.definitions.map((definitions:any) =>
            Builder(Definition)
              .antonyms(definitions.antonyms)
              .definition(definitions.definition)
              .example(definitions.example)
              .synonyms(definitions.synonyms)
              .build()
          ))
          .partOfSpeech(meanings.partOfSpeech)
          .build()
      ))
      .license(
        Builder(License)
          .name(request.license?.name)
          .url(request.license?.url)
          .build()
      )
      .sourceUrls(request.sourceUrls)
      .build();
  }

}
