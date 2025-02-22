import {Friend, Colleague, EmailContact, FriendName } from './myTypes'
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
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  // console.log(highestExtension(colleagues.current));

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
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function findFriends(
  friends: Friend[],
  filter: (f1: Friend) => boolean
): FriendName[] {
  const filtered = friends.filter(filter);
  const result:FriendName[] = filtered.map((friends) => ({name: friends.name}))
  return result;
}

// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length
  if(max != null) {
    end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));

// Recall we added an optional property called ‘interests’ to the Friend data type.You are required to write a function that adds an interest to a friend’s array of interests and 
// returns the updated interests array (of strings). A typical invocation of the function might be:
// console.log(addInterest(friends[0], 'Politics'))
// And the response displayed by the log statement might be the following:
// [ 'Music', 'Sport', 'Politics' ]

function addInterest(friend: Friend, interest: string):string[] {
  if (!friend.interests) {
    const intrests: string[] = [interest]
    friend.interests = intrests
    return friend.interests
  } else {
    friend.interests.push(interest)
    return friend.interests
  }
}

// console.log(addInterest(friends[1], 'Politics'))



