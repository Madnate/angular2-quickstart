export class Library {
  terms: Array<string> = [];

  constructor(public title: string) {

  }

  addTerm(term: string) {
    this.terms.push(term);
  }

  getRandomTerm() {
    return this.terms[Math.floor(Math.random()*this.terms.length)];
  }
}