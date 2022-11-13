import { Component } from '@angular/core';
import { ClientFormData, FormControlsType } from './dynamic-form/interfaces/formControls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jsonFormData: ClientFormData;

  constructor() {
    //construct JSON data
    this.jsonFormData = {
      controls: [
        {
          label: 'First Name',
          name: 'firstName',
          type: FormControlsType.TEXTBOX,
          placeholder: 'Enter your first name',
          required: true
        },
        {
          label: 'ZipCode',
          name: 'Zipcode',
          type: FormControlsType.TEXTBOX,
          placeholder: 'Enter your zipcode',
          options: {
            maxLength: 5,
            valueType: FormControlsType.NUMBERIC
          }
        },
        {
          label: 'Last Name',
          name: 'lastName',
          type: FormControlsType.TEXTBOX,
          placeholder: 'Enter your last name',
          required: true
        },
        {
          label: 'Age',
          name: 'age',
          type: FormControlsType.SELECT,
          placeholder: 'Choose your age',
          selectMenu: {
            options: {
              '10': 'Ten',
              '20': 'Twenty',
              '30': 'Thirty',
            }
          }
        }
      ]
    }


  }
}
