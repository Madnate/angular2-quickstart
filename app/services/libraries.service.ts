import {Library} from '../classes/library';

export class LibrariesService {
  libraries: Array<Library> = [
    new Library('Personne 1'),
    new Library('Action'),
    new Library('Personne 3')
  ];

  addLibrary(title) {
    this.libraries.push(new Library(title));
  }

  getLibraries() {
    return this.libraries;
  }
}