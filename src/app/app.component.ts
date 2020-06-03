import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api/api.service';
import { AnimalService } from './shared/services/animal/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public animalData$;
  public animalDataLoading$;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalData$ = this.animalService.getAnimalData();
    this.animalDataLoading$ = this.animalService.loading$;
  }
}
