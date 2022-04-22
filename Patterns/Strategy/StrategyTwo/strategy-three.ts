import { Strategy } from "../Types/strategy";

export class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}
