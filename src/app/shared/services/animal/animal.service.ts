import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map, tap } from 'rxjs/operators';
import { Animal } from '../../models/animal.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../constants/url.constant';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { MOCK_ANIMAL_INITIAL_STATE } from '../../constants/http-mock.constant';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public loading$: Observable<boolean>;
  private loadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService,
              private localStorageService: LocalStorageService) {
    this.loading$ = this.loadingSubject$.asObservable();
  }

  public mockInitialBackendState(): void {
    if (!this.localStorageService.get('mockData')) {
      this.localStorageService.set('mockData', JSON.stringify(MOCK_ANIMAL_INITIAL_STATE));
    }
  }

  public getAnimalData(): Observable<Animal[]> {
    this.loadingSubject$.next(true);
    return this.apiService.get(API_ENDPOINTS.ANIMAL_DATA)
      .pipe(
        map((response: any) => response.result.map(data => new Animal(data))),
        tap(() => this.loadingSubject$.next(false))
      );
  }

  public removeAnimal(animal: Animal): Observable<Animal> {
    this.loadingSubject$.next(true);
    return this.apiService.post(API_ENDPOINTS.REMOVE_ANIMAL, { eventId: animal.eventId })
      .pipe(
        map((response: any) => new Animal(response)),
        tap(() => this.loadingSubject$.next(false))
      );
  }

  public saveAnimal(animal: Animal): Observable<Animal> {
    this.loadingSubject$.next(true);
    return this.apiService.post(API_ENDPOINTS.SAVE_ANIMAL, { ...this.serializeAnimal(animal) })
      .pipe(
        map((response: any) => new Animal(response)),
        tap(() => this.loadingSubject$.next(false))
      );
  }

  public addAnimal(animal: Animal): Observable<Animal> {
    this.loadingSubject$.next(true);
    return this.apiService.post(API_ENDPOINTS.ADD_ANIMAL, { ...this.serializeAnimal(animal) })
      .pipe(
        map((response: any) => new Animal(response)),
        tap(() => this.loadingSubject$.next(false))
      );
  }

  // It should be method inside Animal, but for some reason
  // Angular Material table removes functions from row objects
  private serializeAnimal(animal: Animal): any {
    const { editMode, ...serialized } = animal;
    return serialized;
  }
}
