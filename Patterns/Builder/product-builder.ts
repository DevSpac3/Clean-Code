interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class ProductOne {
  parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts : ${this.parts.join(", ")}\n`);
  }
}

class ConcreteBuilder implements Builder {
  private product!: ProductOne;

  constructor() {
    this.reset();
  }

  public reset() {
    this.product = new ProductOne();
  }
  producePartA(): void {
    this.product.parts.push("PartA");
  }
  producePartB(): void {
    this.product.parts.push("PartB");
  }
  producePartC(): void {
    this.product.parts.push("PartC");
  }

  public getProduct() {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

const builderClientCode = (director: Director) => {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Standart basic product");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standart full featured product");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log("Custom product");
  builder.producePartA();
  builder.producePartB();
  builder.getProduct().listParts();
};

const director = new Director();
builderClientCode(director);
