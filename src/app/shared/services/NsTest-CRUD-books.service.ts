import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { findIndex } from 'lodash';

import {BooksData} from '../models/BooksData.model';

import {Books_CRUD} from '../models/books.model';

@Injectable()
export class NsTestCRUDbooksService {
  constructor (
    private apiService: ApiService
  ) {}
  private BooksList=Books_CRUD;
  getBooksFromData():BooksData[]{
    return this.BooksList;
  }

  addBook(book:BooksData){
    this.BooksList.push(book);
  }
  updateBook(book:BooksData,postindex:any){
    //let index=findIndex(this.BooksList,(u:BooksData)=>{

     // return u.id=== book.id
   // })
    let getindex=this.BooksList.indexOf(book);
    this.BooksList[postindex]=book;
  }
  deleteBook(book:BooksData){
    let getindex=this.BooksList.indexOf(book);
    this.BooksList.splice(this.BooksList.indexOf(book),1);
  }

}
