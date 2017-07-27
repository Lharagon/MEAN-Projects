export class Product {
  constructor(
    public id: number = Math.floor(Math.random() * 1001),
    public title: string = '',
    public price: number = 0,
    public image: string = null
  ) {}
}
