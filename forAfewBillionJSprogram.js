
var kingReward = 10000;
var reward = 0;
var amount = 0.01;
var days = 30;
var howLong = 0;

for (var i = amount; i <= days + 1; i++) {
    reward = i * i;
}
console.log("This is how much servant made after 30 days $",reward);

howLong = kingReward / reward;
console.log("How many months would it take the servant to make $10,000: ",howLong);
