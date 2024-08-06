import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './basicPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent { }
