import { ConcreteStrategyAdd } from "./StrategyOne/strategy-one";
import { ConcreteStrategyMultiply } from "./StrategyThree/strategy-two";
import { Strategy } from "./Types/strategy";

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number) {
    return this.strategy.execute(a, b);
  }
}

const context = new Context(new ConcreteStrategyAdd()); // Default strategy
context.setStrategy(new ConcreteStrategyMultiply()); // Strategy can be changed during run time
context.executeStrategy(5, 6);
