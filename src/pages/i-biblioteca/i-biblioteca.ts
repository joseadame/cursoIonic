import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksServiceProvider } from '../../providers/books-service/books-service';
import { BookDetailPage } from '../book-detail/book-detail';

/**
 * Generated class for the IBibliotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-i-biblioteca',
  templateUrl: 'i-biblioteca.html',
})
export class IBibliotecaPage {
  books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookService: BooksServiceProvider) {
    this.books = this.bookService.getBooks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IBibliotecaPage');
  }

  bookDetail(book: any) {
    this.navCtrl.push(BookDetailPage, {'book': book});
  }

}
