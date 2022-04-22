abstract class LogisticFactory {
  /**
   * There should be a method which contains the logic related the Transport.
   * If there is not, it is no longer Factory Method Pattern.
   */
  planDelivery(): void {
    const transportType = this.createTransport();
    transportType.deliver();
  }

  /**
   * There should be a method which creates new Transport objects.
   * It's important that the return type of this method matches the Transport interface.
   * This method can be abstract or it can return default Transport type.
   */
  abstract createTransport(): Transport;
}
