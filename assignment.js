//1st Question ans
function anaToVori(ana) {
    if(ana>=0){
        return ana / 16;
    }else{
        return 'Only Positive Number will Calculate';
    }
    
}
let ana = 48;
let totalGoldUnit = anaToVori(ana)
console.log(totalGoldUnit);

// 2nd Question ans 
function pandaCost(singara, chamuca, jilipi) {
    const singaraPrice = 7;
    const chamucaPrice = 10;
    const jilipiPrice = 15;

    let total = (singaraPrice * Math.abs(singara)) + (chamucaPrice * Math.abs(chamuca)) + (jilipiPrice * Math.abs(jilipi));
    return total;
}
let totalFoodCost = pandaCost(1, -1, 1);
console.log(totalFoodCost)

// 3rd Question ans 
function picnicBudget(peoples) {
    const first100HeadCost = 5000;
    const second100HeadCost = 4000;
    const third100HeadCost = 3000;
    let total = 0;
    if (Number.isInteger(peoples) == true && peoples > 0) {
        if (peoples >= 1 && peoples <= 100) {
            total = peoples * first100HeadCost;
            return total;
        } else if (peoples > 100 && peoples <= 200) {
            let first100Total = 100 * first100HeadCost;
            let second100Total = (peoples - 100) * second100HeadCost;
            total = first100Total + second100Total;
            return total;
        } else {
            let thirdTotal = (peoples - 200) * third100HeadCost;
            let firstTotal = 100 * first100HeadCost;
            let secondTotal = 100 * second100HeadCost;
            total = firstTotal + secondTotal + thirdTotal;
            return total;
        }
    } else {
        return "User input accept only Positive and Integer Number"
    }
}

console.log(picnicBudget(301));

// 4th Question ans 
function oddFriend(friends) {
    for (const friend of friends) {
        if (friend.length % 2 == 1) {
            return friend;
        }
    }
    
}

let friendsName = ['Rassel', 'Muhina', 'Nuru', 'Jamshed', 'Rayhan', 'yahuda', 'muhaiminul', 'rafiq', 'rafi', 'rafid'];
console.log(oddFriend(friendsName));