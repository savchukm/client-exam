import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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

  public displayedColumns: string[] = COLUMNS_TO_DISPLAY;
  public editableColumnDefinitions: any[] = EDITABLE_COLUMN_DEFINITIONS;
  public allColumnDefinitions: any[] = ALL_COLUMN_DEFINITIONS;
  public animalToAdd: Animal = new Animal();

  deleteRow(row: Animal): void {
    this.data = this.data.filter((animal: Animal) => animal.eventId !== row.eventId);
  }

  editRow(row: Animal): void {
    row.editMode = true;
  }

  saveRow(row: Animal): void {
    row.editMode = false;
  }

  addRow(): void {
    this.data = [...this.data, this.animalToAdd];
  }

  isEditButtonsDisabled(): boolean {
    return this.data.some((a: Animal) => a.editMode);
  }
}
