export class Order {
  //todo: prideti read only ir private
  id;
  name;
  orderedAt;
  completedAt;
  products; //ProductId[] - modelis
  totalPrice;
  //kai kuriais atvejais reikes initId, initName ir pan
  constructor(id, name, orderedAt, completedAt, products, totalPrice) {
    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
