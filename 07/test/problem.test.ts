import sinon from 'sinon';
import { formatPrice } from './problem';
import * as taxService from './taxService';

describe('가격 표시', () => {
  let taxStub;

  afterEach(() => {
    taxStub.mockRestore();
  });

  it('세금 정보가 없으면 세금 추가를 안내해야 한다.', () => {
    taxStub = jest.spyOn(taxService, 'getTaxInformation').mockImplementation(() => null);

    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item);
    const expectedMessage = 'Aaron Cometbus님의 합계 금액: $30 및 추가 세금';
    expect(message).toEqual(expectedMessage);
  });

  it('세금 정보가 있으면 세금 금액을 알려줘야 한다.', () => {
    taxStub = jest.spyOn(taxService, 'getTaxInformation').mockImplementation(() => 0.1);

    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item);
    const expectedMessage = 'Aaron Cometbus님의 합계 금액: $30 및 추가 세금 $3';
    expect(message).toEqual(expectedMessage);
  });
});
