/**
 * Service package and add-ons
 */
export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  estimatedMinutes: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}
