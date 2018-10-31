import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthorPageModule } from '../pages/author/author.module';
import { CurriculumPageModule } from '../pages/curriculum/curriculum.module';
import { IBibliotecaPageModule } from '../pages/i-biblioteca/i-biblioteca.module';
import { BooksServiceProvider } from '../providers/books-service/books-service';
import { CurriculumServiceProvider } from '../providers/curriculum-service/curriculum-service';
import { BookDetailPageModule } from '../pages/book-detail/book-detail.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AuthorPageModule,
    CurriculumPageModule,
    IBibliotecaPageModule,
    BookDetailPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BooksServiceProvider,
    CurriculumServiceProvider
  ]
})
export class AppModule {}
