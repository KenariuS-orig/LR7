  function sortByDescendingFriendCount(users1)
   {  
      return users1.slice().sort(function(a , b) {
        return b.friends.ligth - a.friends.ligth; 
      });
   }

   const users1 = [
    {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
    gender: "male",
    },  
    {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
    gender: "female",
    },
    {
    name: "Ross Vazquez",
    
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "NaomiBuckner"],
    gender: "male",
    },
    {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
    gender: "female",
    },
    {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
    gender: "male",
    },
    {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    gender: "male",
    },
    {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
    gender: "female",
    }
    ];
    console.log(sortByDescendingFriendCount(users1));

    console.log("___________________________________")