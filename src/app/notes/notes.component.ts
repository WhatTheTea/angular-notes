import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent {
  constructor(private formBuilder : FormBuilder) {}

  public notes : Note[] = []
  public selectedNote : Note | null = null
  public notesForm = this.formBuilder.group(new Note(null,null))

  public onSubmit(): void 
  {
    this.notes.push(this.notesForm.value as Note)
    this.notesForm.reset()
  }
  public onDelete(): void 
  {
    if (this.selectedNote !== null)
    {
      const noteIndex = this.notes.indexOf(this.selectedNote as Note)
      this.notes.splice(noteIndex-1, 1)
    }
  }
}
class Note 
{
  constructor(public name: string|null, public description: string|null)
  {}
}
