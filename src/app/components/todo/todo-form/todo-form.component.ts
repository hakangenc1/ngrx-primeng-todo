import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoEventEmitter = new EventEmitter<string>();

  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      text: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.todoForm.controls;
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      return;
    }

    const {
      value: { text },
    } = this.todoForm;

    this.todoEventEmitter.emit(text);
  }
}
