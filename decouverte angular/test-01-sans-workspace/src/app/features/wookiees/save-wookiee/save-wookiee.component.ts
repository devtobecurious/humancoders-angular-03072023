import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wookiee } from '../models';

@Component({
  selector: 'app-save-wookiee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './save-wookiee.component.html',
  styleUrls: ['./save-wookiee.component.css']
})
export class SaveWookieeComponent implements OnChanges {
  @Input() titre = '';
  @Input() wookiee : Wookiee | undefined;
  @Output('save') wookieeChange = new EventEmitter<Wookiee>();
  @Output('cancel') cancelSave = new EventEmitter<Wookiee>();

  ngOnChanges(changes: SimpleChanges): void {
    console.info('ngOnChanges', changes);
  }

  clickButton(): void {
    this.wookieeChange.emit(this.wookiee);
  }

  cancelButton(): void {
    this.cancelSave.emit(this.wookiee);
  }
}
