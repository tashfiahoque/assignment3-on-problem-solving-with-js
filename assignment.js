// https://github.com/tashfiahoque/assignment3-on-problem-solving-with-js

//kilometerToMeter conversion function
function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        let meter = kilometer * 1000;
        return meter;
    } else {
        let meter = "Please Enter valid value.";
        return meter;
    }
}

//budgetCalculator function
function budgetCalculator(x, y, z) {                       // Here x = no. of watch, y = no. of phone, z = no. of laptop                                                // To avoid negative input
    if (x < 0 || y < 0 || z < 0) {
        return "Please Enter valid value";
    } else {
        let totalPrice = (x * 50) + (y * 100) + (z * 500);   // 50, 100, 500 are amounts in Tk
        return totalPrice;
    }
}

//hotelCost function
function hotelCost(totalNightStay) {
    let totalAmountToPay = 0;                              // totalAmountToPay in Tk
    if (totalNightStay <= 10 && totalNightStay > 0) {
        totalAmountToPay = totalNightStay * 100;
    } else if (totalNightStay > 10 && totalNightStay <= 20) {
        totalAmountToPay = 1000 + (80 * (totalNightStay - 10));
    } else if (totalNightStay > 20) {
        totalAmountToPay = 1800 + (50 * (totalNightStay - 20));
    } else {
        totalAmountToPay = "Please Enter valid value";
    }
    return totalAmountToPay;
}

//megaFriend function
let friendsName = ["klk", "FRDE", "frde", "GTY"];
function megaFriend(friendsName) {
    if (friendsName && friendsName.length) {
        for (var i = 0; i < friendsName.length; i++) {                               // To Remove White Space
            friendsName[i] = friendsName[i].trim();
        }
        let largest = friendsName[0];
        for (let i = 1; i < friendsName.length; i++) {
            if (friendsName[i].length > largest.length) {
                largest = friendsName[i];
            }
        }
        return largest;
    } else {
        return "Please Enter values in friendsName array";
    }
}

