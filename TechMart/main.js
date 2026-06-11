class Order {
    constructor(items ,discountRate){
        this.items = items;
        this.discountRate = discountRate ;
    }
    addItem(product){
        this.items.push(product);
    }
    getSubtotal(){
        return this.items.reduce((total,item)  => total + item.price * item.quantity,0);
    }
    getTaxAmount(){
        const subtotal = this.getSubtotal();
        const discountAmount = subtotal * this.discountRate ;

        return (subtotal - discountAmount) * 0.1 ;
    }
     getFinalTotal() {
        const subtotal = this.getSubtotal();
        const discountAmount = subtotal * this.discountRate;

        return subtotal - discountAmount + this.getTaxAmount();
    }
}
const myOrder = new Order(
    [
        { name: "Chuột không dây", price: 200000, quantity: 2 },
        { name: "Bàn phím cơ", price: 800000, quantity: 1 }
    ],
    0.1
);

myOrder.addItem({
    name: "Tai nghe Gaming",
    price: 300000,
    quantity: 1
});


console.log("Tạm tính:", myOrder.getSubtotal());
console.log("Thuế:", myOrder.getTaxAmount());
console.log("Khách phải trả:", myOrder.getFinalTotal());