import { Strategy } from "../Types/strategy";

export class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}
