import { Routes, RouterModule } from '@angular/router';
import { NsTestCrudBooksComponent } from "app/Books/ns-test-crud-books.component";
import { NsTestAuthGuard} from '../shared';
const BOOK_ROUTER: Routes = [
    {
        path: 'books',
        component: NsTestCrudBooksComponent,
        canActivate: [NsTestAuthGuard]
      },
      {
        path: 'books/:slug',
        component: NsTestCrudBooksComponent,
        canActivate: [NsTestAuthGuard]
        
      }
];

export const bookRouter = RouterModule.forRoot(BOOK_ROUTER );