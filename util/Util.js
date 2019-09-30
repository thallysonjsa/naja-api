module.exports = {
    negativeQuantity(actual, update) {
        result = actual - update;
        if (result < 0) {
            return true;
        } else {
            return false;
        }
    },

    decrease(product, quantity) {
        product.quantity -= parseInt(quantity);
        if (this.negativeQuantity(product.quantity, quantity)) {
            product.quantity = 0;
        }
    },

    increase(product, quantity) {
        product.quantity += parseInt(quantity);
    },

    sort(list) {
        list.sort((a, b) => {
            a.quantity - b.quantity;
        });
        return list;
    }
}