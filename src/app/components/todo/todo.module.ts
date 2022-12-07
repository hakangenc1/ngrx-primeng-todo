import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodosService } from 'src/app/services/todos.service';
import { TodosEffects } from 'src/app/store/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers } from 'src/app/store/reducers';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', reducers),
    EffectsModule.forFeature([TodosEffects]),
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  providers: [TodosService],
  declarations: [TodoListComponent, TodoFormComponent],
  exports: [TodoListComponent, TodoFormComponent],
})
export class TodosModule {}
