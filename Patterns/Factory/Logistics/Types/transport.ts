/**
 * The interface which is common to all objects that can be produced
 * by the creator(LogisticFactory) and its subclasses
 */
interface Transport {
  deliver(): void;
}
