import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../model/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  @ViewChild("noteForm") noteForm!: NgForm;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  addNoteSubmit() {
    if(this.noteForm.invalid) return;

    const newNote = new Note(this.noteForm.value.title, this.noteForm.value.content);
    this.noteForm.reset();
    this.noteService.addNote(newNote);
    this.router.navigateByUrl("notes");


  }

}
