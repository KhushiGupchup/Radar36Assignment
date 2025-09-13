import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-project.component.html'
})
export class CreateProjectComponent {
  projectForm: FormGroup;

  assignees = ['Sajibur', 'Aisha', 'Ravi', 'Priya'];
  statuses = ['Active', 'Progress', 'On Hold', 'Completed'];
  priorities = ['High', 'Medium', 'Normal'];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      assignee: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['']
    }, { validators: this.dateRangeValidator });
  }

  dateRangeValidator(group: AbstractControl) {
    const s = group.get('startDate')?.value;
    const e = group.get('endDate')?.value;
    if (!s || !e) return null;
    return new Date(e) >= new Date(s) ? null : { dateRangeInvalid: true };
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
    console.log('Project Created:', this.projectForm.value);
    alert('Saved successfully! (Step 1 complete)');
  }
}
