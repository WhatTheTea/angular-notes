import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  constructor(private formBuilder : FormBuilder) {}

  public notes : {name: string|null, description: string|null}[] = []

  public notesForm = this.formBuilder.group({
    name: '',
    description: ''
  })

  public onSubmit(): void 
  {
    this.notes.push(this.notesForm.value as {name: string|null, description: string|null})
    this.notesForm.reset()
  }
}
