export class Dictionary {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export class Phonetic {
  audio: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
}

export class License {
  name: string;
  url: string;
}

export class Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export class Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}
