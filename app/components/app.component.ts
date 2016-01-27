import {Component}          from 'angular2/core';
import {LibrariesComponent} from './libraries.component';

@Component({
    selector: 'matchmaker-app',
    templateUrl: 'app/templates/app.html',
    directives: [LibrariesComponent]
})
export class AppComponent { }