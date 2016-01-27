import {Component}          from 'angular2/core';
import {LibrariesComponent} from './libraries.component';
import {GeneratorComponent} from './generator.component';

@Component({
    selector: 'matchmaker-app',
    templateUrl: 'app/templates/app.html',
    directives: [LibrariesComponent, GeneratorComponent]
})
export class AppComponent { }