import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from '../model/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(  private noteService: NoteService ) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }



}
