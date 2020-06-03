import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../shared/models/animal.model';
import { COLUMNS_TO_DISPLAY, EDITABLE_COLUMN_DEFINITIONS } from '../../shared/constants/animal-table.constant';

@Component({
  selector: 'app-animal-data-table',
  templateUrl: './animal-data-table.component.html',
  styleUrls: ['./animal-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalDataTableComponent implements OnInit {
  @Input() data: Animal[];
  @Input() loading: boolean[];

  public displayedColumns: string[] = COLUMNS_TO_DISPLAY;
  public editableColumnDefinitions: any[] = EDITABLE_COLUMN_DEFINITIONS;

  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(row: Animal): void {
    this.data = this.data.filter((animal: Animal) => animal.eventId !== row.eventId);
  }

  editRow(row: Animal): void {
    row.editMode = true;
  }

  saveRow(row: Animal): void {
    row.editMode = false;
  }

  isEditButtonsDisabled(): boolean {
    return this.data.some((a: Animal) => a.editMode);
  }
}
