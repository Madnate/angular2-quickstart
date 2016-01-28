import {Component}        from 'angular2/core';
import {LibrariesService} from '../services/libraries.service';
import {Library}          from '../classes/library';

@Component({
  selector: 'matchmaker-generator',
  templateUrl: 'app/templates/generator.html',
})
export class GeneratorComponent {
  result: string;
  libraries: Array<Library>;

  constructor(private _librariesService: LibrariesService) {

  }

  ngOnInit() {
    this.libraries = this._librariesService.getLibraries();
  }

  generate() {
    let result = '';
    this.libraries.forEach((library) => {
      result = result + library.getRandomTerm() + ' ';
    });
    this.result = result;
  }
}
