import { Component, Inject, Injectable } from '@angular/core';
import { DialogService } from './dialog.service';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import * as countryCodeList from '../../assets/static/countryCode.json';
import { CountryCode } from '../interfaces/countryCode';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class CountryCodeDialogService {
  constructor(private dialogService: DialogService) {}

  openCountryCodeDialog(data: any) {
    let dialogRef = this.dialogService.openDialog(CountryCodeDialogComponent, {
      width: '375px',
      minHeight: '248px',
      enterAnimationDuration: '300',
      exitAnimationDuration: '200',
      backdropClass: 'blur-default-background',
      panelClass: 'theme-dialog',
      position: { top: '55px' },
      data: {
        selectedCountry: data,
      },
    });

    return dialogRef.afterClosed();
  }
}

@Component({
  selector: 'country-code-dialog',
  templateUrl: '../dialogs/country-code.html',
  standalone: true,
  imports: [MatDialogModule, NgFor, NgClass, NgIf, MatIconModule],
})
export class CountryCodeDialogComponent {
  countryCodes: Array<CountryCode> = (countryCodeList as any).default;
  constructor(
    public countryCodeDialogRed: MatDialogRef<CountryCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.selectedCountry) {
      this.countryCodes.sort((a, b) => {
        if (a.countryCode === data.selectedCountry) {
          return -1;
        } else if (b.countryCode === data.selectedCountry) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  onSelectCountryCode(countryCode: CountryCode) {
    this.countryCodeDialogRed.close(countryCode);
  }
}
