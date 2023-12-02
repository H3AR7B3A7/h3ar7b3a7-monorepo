import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'h3ar7b3a7-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
