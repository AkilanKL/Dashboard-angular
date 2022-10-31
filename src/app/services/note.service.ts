import { Injectable } from "@angular/core";
import { Note } from "../model/note.model";

@Injectable({
    providedIn: "root"
})

export class NoteService {

    notes: Note[] = [
        new Note("Test title", "Test content"),
        new Note("Hey", "Test content new")

    ];

    constructor() {
       
    }

    getNotes():Note[] {
        return this.notes;
    }

    getNote(id: string):Note | undefined {
        return this.notes.find((note:Note) => note.id === id);
    }

    addNote(note:Note) {
        this.notes.push(note);
    }

    updateNote(id: string, updatedFields: Partial<Note>) {
        const note:Note = (<Note>this.getNote(id));
        Object.assign(note, updatedFields);
    }

    deleteNote(id: string) {
        const noteIndex = this.notes.findIndex((note: Note) => note.id === id );
        if(noteIndex == -1) return;
        this.notes.splice(noteIndex, 1);
    }

}