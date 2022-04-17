class VictorianSofa implements Sofa {
  hasLegs(): boolean {
    return true;
  }
  sleepOn(): void {
    console.log("zzzzZZ, Victorian");
  }
}

class ModernSofa implements Sofa {
  hasLegs(): boolean {
    return false;
  }
  sleepOn(): void {
    console.log("zzzzZZ, Modern");
  }
}

export { VictorianSofa, ModernSofa };
