import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../model/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note!: Note | undefined;
  @ViewChild("noteForm") noteForm!: NgForm;

  constructor(private noteService: NoteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      if(param.get("id") != null){
        this.note = this.noteService.getNote(<string>param.get("id"));
      }
      
    })
  }

  editNoteSubmit() {
    if(this.noteForm.invalid) return;
    this.noteService.updateNote(this.note!.id, this.noteForm.value);
    this.noteForm.reset();
    this.router.navigateByUrl("notes");
  }

  deleteNote() {
    this.noteService.deleteNote(this.note!.id);
    this.router.navigate(["notes"])
  }

}
