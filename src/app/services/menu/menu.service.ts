import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from 'src/app/type';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuSelected= new BehaviorSubject<Menu[]>([]);
  menuCast= this.menuSelected.asObservable();
  constructor() { }

  updateMenuSelected(menuSelected:Menu[]){
    this.menuSelected.next(menuSelected);
  }
}
