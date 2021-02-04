interface IBillItem {
  name: string;
  price: number;
}

interface IBill {
  name: string;
  due: string;
  total: number;
}

function twoWeeksFromNow(): string {
  const now = new Date();
  const day = now.getDate();
  now.setDate(day + 14);
  return now.toLocaleDateString();
}

function calculateTotal(price: number): number {
  return price * 14;
}

function getBill(item: IBillItem): IBill {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}

function displayBill(bill: IBill): string {
  return `${bill.name} 비용은 ${bill.total} 달러이며 납부일은 ${bill.due}입니다.`;
}

const item: IBillItem = { name: '객실 청소', price: 30 };

const bill = getBill(item);

displayBill(bill);
