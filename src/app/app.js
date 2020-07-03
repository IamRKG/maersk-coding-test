class FlexOrder {
  constructor() {}

  initClickEvent() {
    document.querySelector(".btn-group").addEventListener(
      "click",
      (e) => {
        switch (e.target.textContent) {
          case "SHUFFLE":
            this.flexOrder(this.generateNumber(9));
            break;
          case "SORT":
            this.flexOrder(this.generateNumber());
            break;
          default:
        }
      },
      false
    );
  }
  generateNumber(number = 0) {
    return number;
  }
  flexOrder(number) {
    const doc = document,
      cards = doc.querySelectorAll(".number-list__item");
    let randomNumber;

    cards.forEach(function (card) {
      if (number !== 0) {
        randomNumber = Math.floor(Math.random() * Math.floor(number));
      }
      card.style.order = randomNumber || number;
    });
  }
}

const flextOrder = new FlexOrder();
flextOrder.initClickEvent();
