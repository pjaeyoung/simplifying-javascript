class ValidatorProblem {
  message: string;
  constructor() {
    this.message = '가 유효하지 않습니다.';
  }

  setInvalidMessage(field: string): string {
    return `${field}${this.message}`;
  }

  setInvalidMessages(...fields: string[]): string[] {
    // 콜백으로 넘겨줄 때 this 문맥이 전역을 가리키게 됨
    return fields.map(this.setInvalidMessage);
  }
}
