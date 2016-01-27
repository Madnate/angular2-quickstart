import {Component}        from 'angular2/core';
import {LibraryComponent} from './library.component';
import {Library}          from '../classes/library';
import {LibrariesService} from '../services/libraries.service';

@Component({
  selector: 'matchmaker-libraries',
  templateUrl: 'app/templates/libraries.html',
  providers: [LibrariesService],
  directives: [LibraryComponent]
})
export class LibrariesComponent {
  libraries: Array<Library>;

  // This syntax automatically creates an instance of LibrariesService called _librariesService
  constructor(private _librariesService: LibrariesService) {

  }

  ngOnInit() { // Automatically called on component instanciation
    this.libraries = this._librariesService.getLibraries();
  }

  addLibrary(title: string) {
    this._librariesService.addLibrary(title);
  }
}
