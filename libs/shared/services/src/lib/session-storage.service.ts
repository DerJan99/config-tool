import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private sessionStorage: Storage = window.sessionStorage;

  public setItem(key: string, value: string): void {
    try {
      this.sessionStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  }

  public getItem(key: string): string | null {
    try {
      return this.sessionStorage.getItem(key);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public removeItem(key: string): void {
    try {
      this.sessionStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }

  public clearAll(): void {
    try {
      this.sessionStorage.clear();
    } catch (e) {
      console.error(e);
    }
  }
}
