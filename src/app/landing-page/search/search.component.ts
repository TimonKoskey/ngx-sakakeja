import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public searchPropertyForSale(params: any) {
    console.log('Rent', params);
  }

  public searchPropertyForRent(params: any) {
      console.log('Buy', params);
  }

}
