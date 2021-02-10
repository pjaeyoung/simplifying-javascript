class Validator {
  message: string;
  constructor() {
    this.message = '가 유효하지 않습니다.';
    // this.setInvalidMessage = this.setInvalidMessage.bind(this);
  }

  setInvalidMessage = (field: string): string => `${field}${this.message}`;

  //   setInvalidMessage(field: string) {
  //     return `${field}${this.message}`;
  //   }

  setInvalidMessages(...field: string[]): string[] {
    // return field.map(this.setInvalidMessage.bind(this));
    return field.map(this.setInvalidMessage);
  }
}

const validator = new Validator();
console.log(validator.setInvalidMessages('age', 'id', 'name'));

export {};
