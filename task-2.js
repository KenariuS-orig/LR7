  function getUsersWithFriend(users2 , friendName)
   {  
      return users2.filter(function(user2) {
        return user2.friends.includes(friendName);
      });
   }

   const users2 = [
    {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
    },
    {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
    },
    {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "NaomiBuckner"],
    },
    {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
    },
    {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
    },
    {
    name: "Blackburn Dotson",

    friends: ["Jacklyn Lucas", "Linda Chapman"],
    },
    {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
    }
    ];

    console.log(getUsersWithFriend(users2, "Briana Decker"));
    
    console.log(getUsersWithFriend(users2, "Goldie Gentry"));

    console.log(getUsersWithFriend(users2, "Adrian Cross" ));

    console.log("___________________________________")