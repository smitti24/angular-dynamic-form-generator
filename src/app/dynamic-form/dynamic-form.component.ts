import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ClientFormData, FormControls, FormControlsType } from './interfaces/formControls';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() config: ClientFormData;

  myForm: FormGroup = this.fb.group({})

  get isFormValid(): boolean {
    return this.myForm.valid;
  }

  constructor(private fb: FormBuilder) {};

  ngOnInit(): void {
    this.createForm([...this.config.controls]);
  };

  createForm(controls: FormControls[]) {
    controls.forEach(control => {
      this.myForm.addControl(control.name, this.fb.control(''));
    });
  }

  onSubmit() {
    if (!this.myForm.valid) {
      alert('Please fill out all required fields');
      return;
    }

    console.log(this.myForm.controls);
  }

  isFreeTextOrNumber(control: FormControls): string {
    if (control?.options?.valueType === undefined) return control.type;
    return control.type === FormControlsType.TEXTBOX && control.options?.valueType === FormControlsType.NUMBERIC ? FormControlsType.NUMBERIC : FormControlsType.TEXTBOX;
  }
}
