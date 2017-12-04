import { Component,Input,OnInit } from '@angular/core';
import{NsTestCRUDbooksService,BooksData} from '../shared';
import {clone} from 'lodash';

@Component({
  selector: 'Books-Crud',
  templateUrl: './ns-test-crud-books.component.html',
  styleUrls: ['./ns-test-crud-books.component.css']
})

export class NsTestCrudBooksComponent implements OnInit {
 
  books:BooksData[];
  booksForm:boolean=false;
  isNewBook:boolean;
  newBook:any={};
  getindex : any =-1;
  editbooksForm:boolean=false;
  editedbooks:any={};
  constructor(private BookCrudService:NsTestCRUDbooksService) { }
  
  ngOnInit() {
    this.getBooksList();
  }
  getBooksList=function(){
    this.books=this.BookCrudService.getBooksFromData();
  }

  showEditBookForm(Book:BooksData){
    if(!Book){
      this.booksForm=false;
      return;
    }
    this.editbooksForm=true;
    this.editedbooks=clone(Book);
    this.getindex=this.books.indexOf(Book);

  }
  showAddBookForm(){
    // resets form if edited user
    if(this.books.length){
      this.newBook={};
    }
    this.booksForm=true;
    this.isNewBook=true;

  }
  saveBook=function(book:BooksData){
    if(this.isNewBook){
      //add a new user
      this.BookCrudService.addBook(book)
    }
    this.booksForm=false;
  }
  updateBook(book:BooksData){
    this.BookCrudService.updateBook(this.editedbooks,this.getindex);
    this.editbooksForm=false;
    this.editedbooks={};
  }

  removeBook(book:BooksData){
    this.BookCrudService.deleteBook(book);
  }
  cancelEdits(){
    this.editedbooks={};
    this.editbooksForm=false;
  }

  cancelNewBook(){
    this.newBook={};
    this.booksForm=false;
  }

}
