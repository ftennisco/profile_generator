const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

let profile = [];

rl.question("What's your name? Nicknames are also acceptable? ", (answer1) => {
  profile.name = answer1;

  rl.question("What's an activity you like doing? ", (answer2) => {
    profile.activity = answer2;

    rl.question("What do you listen to while doing that? ", (answer3) => {
      profile.music = answer3;
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        profile.meal = answer4;
        
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          profile.food = answer5;
          
          rl.question("Which D&D class is your absolute favourite? ", (answer6) => {
            profile.dndClass = answer6;
            

            console.log("\n=== Profile ===");
            console.log(`Name: ${profile.name}`);
            console.log(`Activity: ${profile.activity}`);
            console.log(`Music: ${profile.music}`);
            console.log(`Favorite Meal: ${profile.meal}`);
            console.log(`Favorite Food: ${profile.food}`);
            console.log(`Favorite D&D Class: ${profile.dndClass}`);
  
            rl.close();

          });
        });
      });
    });
  });
});