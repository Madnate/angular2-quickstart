import {Component} from 'angular2/core';

@Component({
  selector: 'matchmaker-generator',
  templateUrl: 'app/templates/generator.html',
})
export class GeneratorComponent {
  result: string;

  generate() {
    this.result = 'Dummy result';
  }
}
