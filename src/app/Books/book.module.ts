import { ModuleWithProviders, NgModule } from '@angular/core';

import { NsTestCrudBooksComponent } from './ns-test-crud-books.component';

import { SharedModule } from '../shared';

import { bookRouter } from './book.router';

@NgModule({
  imports: [
   SharedModule, 
   bookRouter,
  ],
  declarations: [
    NsTestCrudBooksComponent
  ]
})
export class BookModule {}
