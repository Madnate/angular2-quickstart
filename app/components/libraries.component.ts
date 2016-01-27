import {Component} from 'angular2/core';
import {Library}   from '../classes/library';

@Component({
  selector: 'matchmaker-libraries',
  templateUrl: 'app/templates/libraries.html'
})
export class LibrariesComponent {
  libraries: Array<Library> = [
    new Library('Personne 1'),
    new Library('Action'),
    new Library('Personne 3')
  ];

  addLibrary(title) {
    this.libraries.push(new Library(title));
  }
}
