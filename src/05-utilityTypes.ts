import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, ColleagueFriend } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)

  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  console.log(generateEventPass(colleagues.current[0]));

// The function below finds the intersection of a friends array and a colleagues array, based on matching the name property; however, the function is incomplete.
// It returns an array of objects with a mix of properties from the Friend and Colleagues types, as follows:

// name
// age
// contact:
// email
// extension
// You are required to complete the function - replace the ?? markers with code and declare any new types required, using utility types where possible.

  function intersection(
    friends: Friend[],
    colleagues: Colleague[]
  ): ColleagueFriend[] {

   return friends.reduce<ColleagueFriend[]>((res, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        const colleagueFriend: ColleagueFriend = {
            name: friend.name,
            phone: friend.phone,
            dob: friend.dob,
            age: friend.age,
            interests: friend.interests,
            department: colleague.department,
            contact: colleague.contact,
          };
          res.push(colleagueFriend)
      }
      return res;
    }, []);
  }
  
  console.log(intersection(friends, colleagues.current));
  
