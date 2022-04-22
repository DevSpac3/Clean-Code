import { ModernChair, VictorianChair } from "./Chair/chair";
import {
  ModernCoffeeTable,
  VictorianCoffeeTable,
} from "./CoffeeTable/coffee-table";
import { ModernSofa, VictorianSofa } from "./Sofa/sofa";
import { FurnitureFactory } from "./Types/base-factory";

/**
 * Factory class for victorian furniture type.
 */
class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
}
/**
 * Factory class for modern furniture type.
 */
class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
}

/**
 * Furniture objects will be created by given factory type.
 */
class Client {
  factory: FurnitureFactory;

  constructor(factory: FurnitureFactory) {
    this.factory = factory;
  }

  sitOnChair() {
    const furniture = this.factory.createChair();
    furniture.sitOn();
  }

  sleepOnSofa() {
    const furniture = this.factory.createSofa();
    furniture.sleepOn();
  }
}

const victorianFurnitureFactory = new VictorianFurnitureFactory();
const client = new Client(victorianFurnitureFactory);

client.sitOnChair();
client.sleepOnSofa();
