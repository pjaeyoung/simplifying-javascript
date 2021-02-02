import getLowestPrice from "./getLowestPrice";

describe("<getLowestPrice 함수 테스트>",()=>{
    it("재고가 없으면 0을 반환합니다.",()=>{
        const item = {
            inventory:0,
            price:10000,
            salePrice:5000,
            isSale:false
        }
        expect(getLowestPrice(item)).toBe(0);
    });

    it("어떤 상품이 할인 중이고 재고가 있다면 할인 가격을 반환합니다.",()=>{
        const item = {
            inventory:5,
            price:10000,
            salePrice:5000,
            isSale:true
        };
        expect(getLowestPrice(item)).toBe(5000);
    });

    it("어떤 상품이 할인 중이 아니고 재고가 있다면 정상가격을 반환합니다.",()=>{
        const item = {
            inventory:5,
            price:10000,
            salePrice:5000,
            isSale:false
        };

        expect(getLowestPrice(item)).toBe(10000)
    });
})