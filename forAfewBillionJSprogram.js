
var kingReward = 10000;
var reward = 0.01;
var days = 30;

for (var i = 1; i <= days; i++) {
    reward = reward  * 2;
    console.log(i, reward);
}
console.log("This is how much servant will make after 30 days $",reward);
console.log("It will take 20 days for servant to make $10,485.76");
console.log("It will take 38 days for servant to make $1374389534.72 (over 1 billion)");
