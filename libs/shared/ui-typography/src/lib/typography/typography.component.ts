import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'h3ar7b3a7-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  @Input() type?: 'body' | 'header-1' | 'header-2' | 'header-3' | 'header-4' | 'header-5' = 'body';
  @Input() color?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'danger' = 'default';
}
