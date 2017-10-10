import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgForm, NG_VALUE_ACCESSOR } from "@angular/forms";

const noop = () => {
};

@Component({
  selector: 'sd-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() customErrors: Array<Object>;
  @Input() formReference: NgForm;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() pattern: string;
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() required: boolean;
  @Input() readonly: boolean;

  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onInput: EventEmitter<any> = new EventEmitter();

  private _innerValue: any = '';

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;

  @Output() inputModelChange: EventEmitter<any> = new EventEmitter<any>();
  
  // get accessor
  get value(): any {
    return this._innerValue;
  };

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v;
      this._onChangeCallback(v);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this._innerValue) {
      this._innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  ngOnInit() {
  }

  focus() {
    this.onFocus.emit();
  }

  blur() {
    this.onBlur.emit();
  }

  input(event) {
    this.onInput.emit(event);
  }
}
