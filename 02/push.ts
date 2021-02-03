interface IItem {
  name: string;
  price: number;
  discount: boolean;
}

const cart: IItem[] = [
  {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false,
  },
  {
    name: 'Godel, Escher, Bach',
    price: 15.99,
    discount: false,
  },
  {
    name: 'Red Mars',
    price: 5.99,
    discount: true,
  },
];

const reward: IItem = {
  name: 'Guide to Science Fiction',
  price: 0,
  discount: true,
};

function addFreeGift(cart: IItem[]): IItem[] {
  if (cart.length > 2) {
    cart.push(reward);
  }
  return cart;
}

interface ISummary {
  discounts: number;
  items: number;
  cart: IItem[];
}

interface IError {
  error: string;
}

function summarizeCart(cart: IItem[]): ISummary | IError {
  const discountable = cart.filter((item) => item.discount);
  if (discountable.length > 1) {
    return {
      error: '할인 상품은 하나만 주문할 수 있습니다.',
    };
  }
  const cartWithReward = addFreeGift(cart);
  return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward,
  };
}

function summarizeCartUpdated(cart: IItem[]): ISummary | IError {
  // cart 원본이 수정됨 => reward 때문에 discountable 길이가 2이므로 에러가 발생함
  const cartWithReward = addFreeGift(cart);
  const discountable = cart.filter((item) => item.discount);
  if (discountable.length > 1) {
    return {
      error: '할인 상품은 하나만 주문할 수 있습니다.',
    };
  }

  return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward,
  };
}

function addFreeGiftUpdated(cart: IItem[]): IItem[] {
  if (cart.length > 2) {
    return [...cart, reward];
  }

  return cart;
}

function summarizeCartSpread(cart: IItem[]): ISummary | IError {
  const cartWidthReward = addFreeGiftUpdated(cart);
  const discountable = cart.filter((item) => item.discount);

  if (discountable.length > 1) {
    return {
      error: '할인 상품은 하나만 주문할 수 있습니다.',
    };
  }

  return {
    discounts: discountable.length,
    items: cartWidthReward.length,
    cart: cartWidthReward,
  };
}
