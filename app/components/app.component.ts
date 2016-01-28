import {Component}          from 'angular2/core';
import {LibrariesComponent} from './libraries.component';
import {GeneratorComponent} from './generator.component';
import {LibrariesService}   from '../services/libraries.service';

@Component({
    selector: 'matchmaker-app',
    templateUrl: 'app/templates/app.html',
    providers: [LibrariesService],
    directives: [LibrariesComponent, GeneratorComponent]
})
export class AppComponent { }