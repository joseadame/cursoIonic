import { Injectable } from '@angular/core';

/*
  Generated class for the BooksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BooksServiceProvider {

  books = [
    {
      title: 'La Colmena',
      author: 'Camilo Jose Cela',
      year: 1951,
      image: 'colmena.jpg',
      isbn: '7845646464645X',
      editor: 'Anaya'
    },
    {
      title: 'La Galatea',
      author: 'Miguel de Cervantes Saavedra',
      year: 1585,
      image: 'galatea.jpg',
      isbn: '784564678554545X',
      editor: 'Anaya'
    },
    {
      title: 'El ingenioso Hidalgo Don Quijote',
      author: 'Miguel de Cervantes Saavedra',
      year: 1605,
      image: 'quijote.png',
      isbn: '784522132134545X',
      editor: 'Planeta'
    },
    {
      title: 'La Dorotea',
      author: 'Felix Lope de Vega y Carpio',
      isbn: '784522132134545X',
      image: 'dorotea.jpg',
      editor: 'Planeta'
    },
  ]

  constructor() {
    console.log('Hello BooksServiceProvider Provider');
  }

  public getBooks() {
    return this.books;
  }

}
