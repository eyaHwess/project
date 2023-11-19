export class Account {
 static nextId = 1;
  constructor(
    public id: number,
    public name: string,
    public CIN: number,
    public email: string,
    public admin: boolean,
    public password: string,
    public phoneNumber: string
  ) {
    // Set the id during the object creation
    this.id = Account.nextId++;
  }

}
