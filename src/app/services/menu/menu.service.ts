import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuSelected= new BehaviorSubject<string[]>([]);
  menuCast= this.menuSelected.asObservable();
  constructor() { }
}
