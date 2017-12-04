import { Routes, RouterModule } from '@angular/router';
import { NsTestEditorComponent } from "app/editor/NsTest-editor.component";
import { EditableArticleResolver } from './NsTest-editable-article-resolver.service';
import { NsTestAuthGuard, SharedModule } from '../shared'
const EDITOR_ROUTER: Routes = [
    {
        path: 'editor',
        component: NsTestEditorComponent,
        canActivate: [NsTestAuthGuard]
      },
      {
        path: 'editor/:slug',
        component: NsTestEditorComponent,
        canActivate: [NsTestAuthGuard],
        resolve: {
          article: EditableArticleResolver
        }
      }
];

export const EditorRouter = RouterModule.forRoot(EDITOR_ROUTER );