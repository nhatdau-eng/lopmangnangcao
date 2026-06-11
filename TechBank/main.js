class BankAccount {
    constructor(id, owner, balance = 0) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {

        if (amount <= 0) {
            throw new Error("Số tiền nạp phải lớn hơn 0");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Số tiền rút phải lớn hơn 0");
        }
        if (this.balance < amount) {
            throw new Error(`${this.owner} không đủ số dư`);
        }
        this.balance -= amount;
    }
    transferTo(targetAccount, amount) {
        try {
            this.withdraw(amount);
            targetAccount.deposit(amount);
            console.log(`${this.owner} chuyển ${amount} cho ${targetAccount.owner}`);
        } catch (error) {
            if (this.balance >= 0) {
            }
            throw error;
        }
    }
    showBalance() {
        console.log(
            `${this.owner}: ${this.balance}`
        );
    }
}
