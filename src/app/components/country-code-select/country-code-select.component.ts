import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryCodeDialogService } from 'src/app/services/country-code-dialog.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-country-code-select',
  templateUrl: './country-code-select.component.html',
  styleUrls: ['./country-code-select.component.scss'],
})
export class CountryCodeSelectComponent {
  private _control: FormControl | null = null;
  @Input() set control(value: FormControl | null) {
    if (value instanceof FormControl || value === null) {
      this._control = value;
    } else {
      throw new Error('FormControl is required');
    }
  }
  get control(): FormControl | null {
    return this._control;
  }

  @Input() label!: string;
  constructor(private countryCodeDialogService: CountryCodeDialogService) {}
  selectCountryCode() {
    this.countryCodeDialogService
      .openCountryCodeDialog(this.control?.value)
      .subscribe((res) => {
        if (res) {
          this.control?.setValue(res.countryCode);
        }
      });
  }
}
