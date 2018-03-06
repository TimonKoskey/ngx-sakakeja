export class Property {
  constructor(public price: number, public location: string) {
  }
}

export class LandProperty extends Property {
  constructor(public price: number, public location: string, public size: number) {
    super(price, location);
  }
}


export class ApartmentProperty extends Property {
  constructor(public price: number, public location: string, public bedrooms: number) {
    super(price, location);
  }
}

export const PropertyTypes = {
  Land: 'Land',
  Apartment: 'Apartment',
  House: 'House',
  Office: 'Office',
  Default: 'Property Type'
};
