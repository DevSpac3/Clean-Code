/**
 * If a new Car class is defined and I want to include it in the system,
 * would it be necessary to convert the approach to an abstract factory ?
 * TODO check this situation
 */
class RoadLogistic extends LogisticFactory {
  createTransport(): Transport {
    return new Truck();
  }
}

class Truck implements Transport {
  deliver(): void {
    console.log("Delivers cargo by road");
  }
}
