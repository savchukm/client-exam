import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map, tap } from 'rxjs/operators';
import { Animal } from '../../models/animal.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../constants/url.constant';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public loading$: Observable<boolean>;
  private loadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService) {
    this.loading$ = this.loadingSubject$.asObservable();
  }

  getAnimalData(): Observable<Animal[]> {
    this.loadingSubject$.next(true);
    return this.apiService.get(API_ENDPOINTS.ANIMAL_DATA)
      .pipe(
        map((response: any) => response.result.map(data => new Animal(data))),
        tap(() => this.loadingSubject$.next(false))
      );
  }
}
