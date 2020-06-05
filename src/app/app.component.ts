import { Component, OnInit } from '@angular/core';
import { AnimalService } from './shared/services/animal/animal.service';
import { Animal } from './shared/models/animal.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: Animal[];
  public animalDataLoading$: Observable<boolean>;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.mockInitialBackendState();
    this.animalService.getAnimalData().subscribe((data: Animal[]) => {
      this.data = data;
    });
    this.animalDataLoading$ = this.animalService.loading$;
  }

  public onAnimalRemove(animal: Animal): void {
    this.animalService.removeAnimal(animal).subscribe((removedAnimal: Animal) => {
      this.data = this.data.filter((a: Animal) => a.eventId !== removedAnimal.eventId);
    });
  }

  public onAnimalSave(animal: Animal): void {
    this.animalService.saveAnimal(animal).subscribe((updatedAnimal: Animal) => {
      this.data = this.data.map((a: Animal) => {
        if (a.eventId === updatedAnimal.eventId) {
          return updatedAnimal;
        }
        return a;
      });
    });
  }

  public onAnimalAdd(animal: Animal): void {
    this.animalService.addAnimal(animal).subscribe((newAnimal: Animal) => {
      this.data = [...this.data, newAnimal];
    });
  }
}
