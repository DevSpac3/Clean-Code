class SeaLogistic extends LogisticFactory {
  createTransport(): Transport {
    return new Ship();
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("Delivers cargo by sea");
  }
}
