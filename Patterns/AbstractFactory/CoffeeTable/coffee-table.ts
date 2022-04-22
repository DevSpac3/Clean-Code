class VictorianCoffeeTable implements CoffeeTable {
  hasLegs(): boolean {
    return true;
  }
  drinkCoffee(): void {
    console.log("More Cafein, yey !, Victorian");
  }
}

class ModernCoffeeTable implements CoffeeTable {
  hasLegs(): boolean {
    return false;
  }
  drinkCoffee(): void {
    console.log("More Cafein, yey !, Modern");
  }
}

export { VictorianCoffeeTable, ModernCoffeeTable };
