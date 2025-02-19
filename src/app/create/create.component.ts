import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import {HousingLocation} from "../housingLocation";
import {HousingService} from "../housing.service";


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
 // private housingService: HousingService = inject(HousingService)
  private houseList: HousingLocation[] = [];

  // constructor() {
  //   this.housingService.getAllHousingLocations().subscribe((houseList: HousingLocation[]) => {this.houseList = houseList;})
  // }

  houseForm = new FormGroup({
    "name": new FormControl("", Validators.required),
    "city": new FormControl("", Validators.required),
    "state": new FormControl("", Validators.required),
    "photo": new FormControl(""),
    "availableUnits": new FormControl("", Validators.required),
    "wifi": new FormControl("", Validators.required),
    "laundry": new FormControl("", Validators.required),
    "security": new FormControl("", Validators.required),
  })

  submit() {
  console.log(this.houseForm.value)

    if (this.houseForm.valid) {
      let wifi = false;
      wifi = this.houseForm.value.wifi == "true";
      let laundry = false;
      laundry = this.houseForm.value.laundry == "true";

      const newHouse: HousingLocation = {
        id: (this.houseList[this.houseList.length - 1].id) + 1,
        name: this.houseForm.value.name!,
        city: this.houseForm.value.city!,
        state: this.houseForm.value.state!,
        photo: this.houseForm.value.photo!,
        availableUnits: Number(this.houseForm.value.availableUnits)!,
        wifi: wifi!,
        laundry: laundry!,
        security: this.houseForm.value.security!
      }
      // this.housingService.addHousingLocation(newHouse).subscribe(() => {this.houseList.push(newHouse)})
      this.houseForm.reset();
    }
  }
}
