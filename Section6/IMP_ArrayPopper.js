class ArryPoppa {
    constructor(arr) {
        this.arr = arr;
        this.atBeggining = true;
    }

    togglePopper() {
        this.atBeggining = !this.atBeggining;
        return this.atBeggining ? this.arr.pop() : this.arr.shift();
    }
}

const ap = new ArryPoppa([1, 2, 3, 4, 5]);

ap.togglePopper();
ap.togglePopper();
ap.togglePopper();
ap.togglePopper();
ap.togglePopper();