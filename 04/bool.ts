interface IEmployee {
  name: string;
  equipmentTraining: boolean;
  certificates?: string[];
}

const employee: IEmployee = {
  name: 'Eric',
  equipmentTraining: true,
};

function listCerts(employee: IEmployee) {
  if (employee.equipmentTraining) {
    employee.certificates = ['Equipment'];
    //조작
    delete employee.equipmentTraining;
    // ...
  }
}

function checkAuthorization(employee: IEmployee) {
  // 객체에 키가 존재하지 않아도 오류 발생X
  // undefined이므로 !undefined는 truthy한 값으로 취급
  // if문 통과
  if (!employee.equipmentTraining) {
    return '기계를 작동할 권한이 없습니다.';
  }
  return `반갑습니다, ${employee.name}님`;
}

listCerts(employee);
checkAuthorization(employee);

// 1. 조작을 가하지 않거나
function checkAuthorizationSolution(employee: IEmployee) {
  // 2. true 값으로 엄격한 일치
  if (employee.equipmentTraining !== true) {
    return '기계를 작동할 권한이 없습니다.';
  }
  return `반갑습니다, ${employee.name}님`;
}

function checkAuthorizationUpdated(employee: IEmployee) {
  if (employee.certificates && employee.certificates.includes('Equipment')) {
    return `반갑습니다, ${employee.name}님`;
  }
  return '기계를 작동할 권한이 없습니다.';
}

export {};
