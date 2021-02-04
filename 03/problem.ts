interface IBook {
  author: string;
  title: string;
  year?: number;
  rating?: number | null;
}

const defaults: IBook = {
  author: '',
  title: '',
  year: 2021,
  rating: null,
};

const book: IBook = {
  author: 'Joe Morgan',
  title: 'Simplifying Javascript',
};

// Object.assign 없이 구현했을 때 코드가 장황해짐
function addBookDefaults(book: IBook, defaults: IBook): IBook {
  const updated = {} as IBook;
  for (let aField in defaults) {
    updated[aField] = book[aField] || defaults[aField];
  }
  return updated;
}

// 한줄로 addBookDefaults를 구현할 수 있음
const updated = Object.assign({}, defaults, book);

const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

const employee = Object.assign({}, defaultEmployee, {
  name: Object.assign({}, defaultEmployee.name),
});
