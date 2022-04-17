class VictorianChair implements Chair {
  hasLegs(): boolean {
    return true;
  }
  sitOn(): void {
    console.log("I sit on victorian chair");
  }
}

class ModernChair implements Chair {
  hasLegs(): boolean {
    return false;
  }
  sitOn(): void {
    console.log("I sit on modern chair");
  }
}

export { VictorianChair, ModernChair };
