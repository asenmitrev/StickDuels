import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextInputComponent } from './../text-input/text-input.component';
import { Component, forwardRef } from '@angular/core';

@Component({
  selector: 'sd-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent extends TextInputComponent { }
