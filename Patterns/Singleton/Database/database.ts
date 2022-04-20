/**
 * The Singleton's constructor should always be private to prevent direct
 * construction calls with the `new` operator.
 */
class Database {
  private static instance: Database;

  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */

  public static getInstance(): Database {
    if (this.instance === null) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public businessLogic() {
    // ...
  }
}

/**
 * The client code.
 */
function clientCode() {
  const firstDB = Database.getInstance();
  const secondDB = Database.getInstance();

  if (firstDB === secondDB) {
    console.log("Singleton works");
  } else {
    console.log("Singleton failed");
  }
}

clientCode();
