import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/models/animal.model';
import {
  ALL_COLUMN_DEFINITIONS,
  COLUMNS_TO_DISPLAY,
  EDITABLE_COLUMN_DEFINITIONS
} from '../../shared/constants/animal-table.constant';

@Component({
  selector: 'app-animal-data-table',
  templateUrl: './animal-data-table.component.html',
  styleUrls: ['./animal-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalDataTableComponent {
  @Input() data: Animal[];
  @Input() loading: boolean[];
  @Output() remove: EventEmitter<Animal> = new EventEmitter<Animal>();
  @Output() add: EventEmitter<Animal> = new EventEmitter<Animal>();
  @Output() save: EventEmitter<Animal> = new EventEmitter<Animal>();

  public displayedColumns: string[] = COLUMNS_TO_DISPLAY;
  public editableColumnDefinitions: any[] = EDITABLE_COLUMN_DEFINITIONS;
  public allColumnDefinitions: any[] = ALL_COLUMN_DEFINITIONS;
  public animalToAdd: Animal = new Animal();

  deleteRow(row: Animal): void {
    this.remove.emit(row);
  }

  editRow(row: Animal): void {
    row.editMode = true;
  }

  saveRow(row: Animal): void {
    row.editMode = false;
    this.save.emit(row);
  }

  addRow(): void {
    this.add.emit(this.animalToAdd);
  }

  isEditButtonsDisabled(): boolean {
    return this.data.some((a: Animal) => a.editMode);
  }
}
