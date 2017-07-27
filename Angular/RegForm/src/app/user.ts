export class User {
  public firstName: string;
  public lastName: string
  public email: string;
  public password: string;
  public address: any;
  public street: string;
  public unit: string;
  public city: string;
  public state: string;
  public lucky: boolean;

  constructor() {
    this.firstName= "";
    this.lastName= "";
    this.email= "";
    this.password= "";
    this.address = {
      street: '',
      unit: '',
      city: '',
      state: ''
    };
    this.lucky;
  }
}
