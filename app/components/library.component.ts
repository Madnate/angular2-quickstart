import {Component} from 'angular2/core';
import {Library}   from '../classes/library';

@Component({
  selector: '.matchmaker-library',
  templateUrl: 'app/templates/library.html',
  inputs: ['library']
})
export class LibraryComponent {
  library: Library;

  addTerm(term: string) {
    this.library.addTerm(term);
  }
}