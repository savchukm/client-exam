import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Animal } from '../../shared/models/animal.model';
import { COLUMNS_TO_DISPLAY } from '../../shared/constants/animal-table.constant';

@Component({
  selector: 'app-animal-data-table',
  templateUrl: './animal-data-table.component.html',
  styleUrls: ['./animal-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalDataTableComponent implements OnInit {
  @Input() data: Animal[];
  @Input() loading: boolean[];

  displayedColumns: string[] = COLUMNS_TO_DISPLAY;

  constructor() { }

  ngOnInit(): void {
  }

}
