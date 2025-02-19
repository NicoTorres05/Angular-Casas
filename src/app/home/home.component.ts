import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housingLocation';
import { HousingService } from '../housing.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
 export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = [];

  // private housingService: HousingService = inject(HousingService);

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  //constructor() {
  //  this.housingService.getAllHousingLocations().subscribe((housingLocationList: HousingLocation[]) => {
  //    this.housingLocationList = housingLocationList;
  //    this.filteredLocationList = housingLocationList;
  //   });
//  }
}
