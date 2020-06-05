import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public get(key: string): any {
    return localStorage.getItem(key);
  }

  public set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    return localStorage.clear();
  }
}
