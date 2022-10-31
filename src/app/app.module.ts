import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { BookmarkTileComponent } from './bookmarks/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';

const routes:Routes = [
  {
    path: "bookmarks", component: BookmarksComponent
  },
  {
    path: "todos", component: TodosComponent
  },
  {
    path: "notes", component: NotesComponent
  },
  {
    path: "notes/add", component: AddNoteComponent
  },
  {
    path: "notes/edit/:id", component: EditNoteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TabsComponent,
    BookmarksComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
