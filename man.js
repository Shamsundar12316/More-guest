// part 12// question 16 // more guest// continue with 15 exercise
var guest_list = ["washo dev", "kiran", "kailash", "ravi", "radai"];
// for(let i=0; i<guest_list.length; i++){
// console.log(`Dear ${guest_list[i]}\n\nyou are invited for a dinner tomorrow,\n\nThank you,\n\n`);
// }
var not_coming = "washo dev";
var new_guest = "rajes";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nyou are invited for a dinner tomorrow,\n\nThank you,\n\n"));
}
console.log("Mr ".concat(not_coming, ", is not coming for a dinner tomorrow,"));
guest_list.unshift("Virat kholi");
guest_list.splice(guest_list.length / 2, 2, "Missi");
guest_list.push("Babar Azam");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nyou are invited for a dinner tomorrow,\n\nThank you,\n\n"));
}
console.log("we have found a bigger dinner table so we invited more guests");
