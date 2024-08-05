// part 12// question 16 // more guest// continue with 15 exercise

 let guest_list: string[] = ["washo dev","kiran","kailash","ravi","radai"];

// for(let i=0; i<guest_list.length; i++){
// console.log(`Dear ${guest_list[i]}\n\nyou are invited for a dinner tomorrow,\n\nThank you,\n\n`);
// }
    
let not_coming: string = "washo dev";
let new_guest: string = "rajes";
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nyou are invited for a dinner tomorrow,\n\nThank you,\n\n`);
     }
  console.log(`Mr ${not_coming}, is not coming for a dinner tomorrow,`)
    guest_list.unshift(`Virat kholi`);
    guest_list.splice(guest_list.length/2,2, "Missi");
    guest_list.push("Babar Azam");
     for(let i=0; i<guest_list.length; i++){
       console.log(`Dear ${guest_list[i]}\n\nyou are invited for a dinner tomorrow,\n\nThank you,\n\n`);
     }
     console.log(`we have found a bigger dinner table so we invited more guests`);

    
