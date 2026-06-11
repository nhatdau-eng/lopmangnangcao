class LegacyWallet {
    #ownerName ;
    #balance ;
    constructor(ownerName, initialBalance) {
        if(typeof initialBalance !=="number" || initialBalance <0 ){
            throw new Error("Số dư khởi tạo không hợp lệ ");
        }
        this.#ownerName = ownerName;
        this.#balance = initialBalance; 
    }

    deposit(amount) {
    if(typeof amount !=="number"||!Number.isFinite(amount)){
        throw new Error ("Số tiền nạp phải là số tiền hợp lệ ");
    }
    if ( amount <= 0 ){
        throw new Error( "Số tiền nạp phải lớn hơn 0 ")
    }
    this.#balance += amount ;
    return this.#balance ;
    }
   withdraw(amount){
    if(typeof amount !=="number"||!Number.isFinite(amount)){
        throw new Error("Số tiền rút phải hợp lệ  ");
    }
    if (amount <=0 ){
        throw new Error("Số tiền rút  lớn hơn 0 ")
    }
    if(amount > this.#balance){
        throw new Error("Số dư không đủ");
    }
    this.#balance-=amount;
    return this.#balance;
   }
   getBalance(){
    return this.#balance;
   }
   getOwnerName(){
    return this.#ownerName; 
   }
}
const wallet = new LegacyWallet(
    "Nguyen Van A",
    50000
);

console.log(wallet.getBalance());
wallet.deposit(100000);
console.log(wallet.getBalance());
wallet.withdraw(50000);
console.log(wallet.getBalance());