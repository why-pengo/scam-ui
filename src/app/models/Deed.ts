export interface Deed {
  id: string;
  name: string;
  creation: string;
  color: string;

  // Type for dynamic access to specific properties
  [key: string]: any;
}
