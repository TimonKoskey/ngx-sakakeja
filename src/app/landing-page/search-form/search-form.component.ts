import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PropertyTypes } from '../../property/property';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public selectedPropertyType = PropertyTypes.Default;
  @Output() searchParams = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  public search(value: any) {
    this.searchParams.emit(value);
}
  public selectedApartmentOrHouse() {
    return this.selectedPropertyType === PropertyTypes.Apartment || this.selectedPropertyType === PropertyTypes.House;
  }

  public selectedLand() {
    return this.selectedPropertyType === PropertyTypes.Land;
  }
}
