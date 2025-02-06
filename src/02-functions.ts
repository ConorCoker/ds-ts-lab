import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics';
import { colleagues } from './01-basics';

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}
// You are required to add a new function, called ‘allOlder’,
// that takes an array of friend objects, increments each one’s age by one year, and returns the new ages as an array of strings. 

function allOlder(friends: Friend[]) : string {
    var str = ""
    friends.forEach((friend) => {
        friend.age += 1;
        str += friend.name + " is now " + friend.age + ", "
    }) 
    return str;
}

// console.log(older(friends[0]))
// console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

// You are required to wrute a function called ‘addColleague’ that adds a colleague to an array, and setting their extensins number to the highest extension, plus 1. 

function addColleague(colleaguesIn: Colleague[], name: string, department: string, email: string) {
    var extension = highestExtension(colleagues.current).contact.extension + 1;
    const newColleague: Colleague = {
        name: name,       
        department: department,    
        contact: {
          email: email,   
          extension: extension           
        }
      };
    colleaguesIn.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
  
