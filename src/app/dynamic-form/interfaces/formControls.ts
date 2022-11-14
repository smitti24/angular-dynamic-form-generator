export enum FormControlsType {
  'TEXTBOX' = 'textbox',
  'NUMERIC' = 'number',
  'SELECT' = 'select',
  'RADIO' = 'radio',
  'CHECKBOX' = 'checkbox',
  'TEXTAREA' = 'textarea',
  'BUTTON' = 'button',
  'SUBMIT' = 'submit'
}

export interface FormControls {
  label: string;
  name: string;
  type: FormControlsType;
  placeholder?: string;
  options?: FormOptions;
  selectMenu?: FormSelectMenu;
  required?: boolean;
}

export interface ClientFormData {
  controls: FormControls[];
}

export interface FormOptions {
  minLength?: number,
  maxLength?: number,
  valueType?: FormControlsType
}

export interface FormSelectMenu {
  options: {[key: string]: string};
}
