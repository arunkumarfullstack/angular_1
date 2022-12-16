import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/type';


@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  constructor(private http: HttpClient) {
   
  }

  public getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>("../../../assets/mydata.json");
  }
}
