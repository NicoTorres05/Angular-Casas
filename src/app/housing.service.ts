import { Injectable } from '@angular/core';

import { HousingLocation } from './housingLocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) { }

  getAllHousingLocations()  {
    return this.http.get<HousingLocation[]>(this.url)
  }

  getHousingLocationById(id: number){
    return this.http.get<HousingLocation>(`${this.url}/${id}`);
  }

  addHousingLocation(housingLocation: HousingLocation) {
    return this.http.post<HousingLocation>(this.url, housingLocation);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
