import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  books = [
    {
      title: 'La Colmena',
      author: 'Camilo Jose Cela',
      year: 1951,
      image: 'lacolmena.jpg'
    },
    {
      title: 'La Galatea',
      author: 'Miguel de Cervantes Saavedra',
      year: 1585,
      image: 'lagalatea.jpg'
    },
    {
      title: 'El ingenioso Hidalgo Don Quijote',
      author: 'Miguel de Cervantes Saavedra',
      year: 1605,
      image: 'donQuijote.jpg'
    },
    {
      title: 'La Dorotea',
      author: 'Felix Lope de Vega y Carpio',
      year: 1585,
      image: 'dorotea.jpg'
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IBibliotecaPage');
  }

}
