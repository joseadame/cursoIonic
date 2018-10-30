import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IBibliotecaPage } from './i-biblioteca';

@NgModule({
  declarations: [
    IBibliotecaPage,
  ],
  imports: [
    IonicPageModule.forChild(IBibliotecaPage),
  ],
})
export class IBibliotecaPageModule {}
