import { Strategy } from "../Types/strategy";

export class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}
