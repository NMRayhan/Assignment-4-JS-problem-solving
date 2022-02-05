//1st Question ans
function anaToVori(ana) {
    return ana / 16;
}

let totalGoldUnit = anaToVori(5)
console.log(totalGoldUnit);

// 2nd Question ans 
function pandaCost(singara, chamuca, jilipi) {
    const singaraPrice = 7;
    const chamucaPrice = 10;
    const jilipiPrice = 15;

    let total = (singaraPrice * singara) + (chamucaPrice * chamuca) + (jilipiPrice * jilipi);
    return total;
}
let totalFoodCost = pandaCost(3, 2, 2);
console.log(totalFoodCost)

// 3rd Question ans 
function picnicBudget(peoples) {
    const first100HeadCost = 5000;
    const second100HeadCost = 4000;
    const third100HeadCost = 3000;
    let total = 0;
    if (Number.isInteger(peoples) == true && peoples >= 1) {
        if (peoples > 0 && peoples <= 100) {
            total = peoples * first100HeadCost;
            return total;
        } else if (peoples > 100 && peoples <= 200) {
            let first100Total = 100 * first100HeadCost;
            let second100Total = (peoples - 100) * second100HeadCost;
            total = first100Total + second100Total;
            return total;
        } else {

            return total;
        }
    } else {
        return "User input accept only Positive and Integer Number"
    }
}

console.log(picnicBudget(205));

// 4th Question ans 
function oddFriend(friends) {
    let oddFriendArray = []
    for (const friend of friends) {
        if (friend.length % 2 == 1) {
            oddFriendArray.push(friend);
        }
    }
    return oddFriendArray[0];
}

let friendsName = ['Rassel', 'Muhina', 'Nuru', 'Jamshed', 'Rayhan', 'yahuda', 'muhaiminul', 'rafiq', 'rafi', 'rafid'];
console.log(oddFriend(friendsName));