import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './registerPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent { }
