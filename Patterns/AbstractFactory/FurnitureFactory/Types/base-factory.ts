/**
 * There should be an Interface which is implemented by factory classes.
 * Client can use this interface for object creation.
 */
export interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}
