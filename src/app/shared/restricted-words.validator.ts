import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
    return function (control: FormControl) {
      var invalidWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w);
      return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null;
    }
  }