import { ModuleWithProviders, NgModule } from '@angular/core';
import { EditorRouter } from './editor.router';
import { NsTestEditorComponent } from './NsTest-editor.component';
import { EditableArticleResolver } from './NsTest-editable-article-resolver.service';
import { NsTestAuthGuard, SharedModule } from '../shared';


@NgModule({
  imports: [
    EditorRouter,
    SharedModule
  ],
  declarations: [
    NsTestEditorComponent
  ],
  providers: [
    EditableArticleResolver,
  ]
})
export class EditorModule {}
