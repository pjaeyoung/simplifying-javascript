// 예제 
function getLowestPriceDefault(item):number{
    var count = item.inventory;
    var price = item.price;
    if(item.salePrice){
        var count = item.saleInventory;
        if(count > 0){
            price = item.salePrice;
        }
    }
    if(count){
        return price;
    }
    return 0;
}


interface Item {
    inventory: number; // 재고
    price:number;        
    salePrice: number;
    isSale:boolean
}


// 변형 
export default function getLowestPrice(item:Item):number{
    if(item.inventory === 0){
        return 0;
    }

    return item.isSale ? item.salePrice : item.price;
}

