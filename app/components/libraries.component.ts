import {Component} from 'angular2/core';

@Component({
  selector: 'matchmaker-libraries',
  templateUrl: 'app/templates/libraries.html'
})
export class LibrariesComponent {
  libraries: Array<String> = ["Personne 1", "Action", "Personne 2"];
}
