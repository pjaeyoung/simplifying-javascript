const validator = {
  message: '는 유효하지 않습니다.',
  setInvalidMessage(field) {
    return `${field}${this.message}`;
  },
};

validator.setInvalidMessage('도시');

const validatorProblem = {
  message: '는 유효하지 않습니다.',
  setInvalidMessage(...fields) {
    return fields.map(function (field) {
      return `${field}${this.message}`;
    });
  },
};

validatorProblem.setInvalidMessage('도시', '색상', '옷');

const validatorUpdated = {
  message: '는 유효하지 않습니다.',
  setInvalidMessage(...fields) {
    return fields.map((field) => `${field}${this.message}`);
  },
};

validatorUpdated.setInvalidMessage('도시', '색상', '옷');

export {};
