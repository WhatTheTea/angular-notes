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
  public selectedNotes : string[] = []
  public notesForm = this.formBuilder.group(new Note(null,null))

  public onSubmit(): void 
  {
    this.notes.push(this.notesForm.value as Note)
    this.notesForm.reset()
  }
  public onDelete(): void 
  {
    if (this.selectedNotes.length !== 0)
    {
      for (var strnote of this.selectedNotes)
      {
        const note = new Note(strnote.split(':')[0],strnote.split(':')[1].slice(1))
        let i = -1
        this.notes.forEach((value, index) => i = value.name === note.name && value.description === note.description ? index : i)
        if (i > -1) this.notes.splice(i,1)
        console.log(note)
      }
      
    }
  }
}
class Note 
{
  constructor(public name: string|null, public description: string|null)
  {}
}
