import { Routes } from '@angular/router';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagCreateComponent } from './components/tag-create/tag-create.component';
import { TagEditComponent } from './components/tag-edit/tag-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tags', pathMatch: 'full' },
    {
        path: 'tags',
        component: TagListComponent,
    },
    {
        path: 'create-tag',
        component: TagCreateComponent
    },
    {
        path: 'edit-tag/:id',
        component: TagEditComponent
    }
];
