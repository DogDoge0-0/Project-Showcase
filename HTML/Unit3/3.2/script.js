// Initialization
let secret1 = false;
let secret2 = false;
let textReset1 = false;
let textReset2 = false;

// Hello World!
/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"; */

// Text Replacement (Secret)
setInterval(function() {
  if (secret1 == true && secret2 == true) {
    const secret = document.getElementById("header");
    secret.textContent = "How do you do fellow kids";
  }
}, 1000);

// Text Replacment (Pokémon)
let P = document.getElementById("P");
P.onclick = () => {
  if (textReset1 == false) {
    textReset1 = true;
    secret1 = true;
    const poke1 = document.getElementById("this");
    poke1.textContent = "Word Vomit I choose you!";
    const poke2 = document.getElementById("that");
    poke2.textContent = "Word Vomit used vomit!";
    const poke3 = document.getElementById("thing");
    poke3.textContent = "slippery guitar shriek galaxy hammer jagged magnet deep gamut joust artisan peacock thunderbolt captain sardine spacewalk octopus tetherball loudspeaker digit mauve jam sarcasm tuxedo speckle linger kerfuffle burp spinach echo freight brainwash daffodil cantaloupe alleyway yawn flock cannonball incense mermaid citadel updraft pantsuit kink creek turtle peckish battering ram scribble halogen gelatin tambourine ironclad bratwurst melon hula hoop tusk waffle iron spear ruffle jigsaw puzzle thump hurricane stallion farmstead gingerbread superman outback glue cemetery orchid sprout hunchback ninja encyclopedia misty giraffe metronome caveman nibble wigwam gnarled seahorse mastodon waltz chameleon pufferfish vampire sleepyhead parachute mischief oxygen chinup thud basilica possum toothbrush doghouse tiger mosquito flicker craft room humidifier flute hopscotch yodel loafer sizzle mustard pretzel icicle lobster gumdrop loom puppeteer hoodie bumblebee pandemonium radio cobra kaleidoscope spaghetti hairbrush welder anemone polo shirt shadow cassette player bubblegum tuna melt doorstep ostrich sunflower postcard pelican mortar boa constrictor geyser thunderstorm ramshackle avocado calliope camper gooseberry iris stepladder leotard jellybean rooster scale rattlesnake witchcraft nozzle fortress figment cream puff chariot cotillion bubble wrap cricket anteater telescope monkey wrench haymaker germ cloud tenor saxophone watermelon doubledecker bus bugle slinky sapphire kangaroo windmill iguana chainsaw watering can scooter ankle bracelet water bottle board game ringworm acorn keyhole pelican crossing molehill skunk minivan butterfly honey bee jumper cable bell pepper megaphone tentacle coin flipper rockstar sawdust wristband penny whistle mastiff trumpet serpent castle cucumber chalkboard koala hammerhead taffy roadrunner syrup sarsaparilla raisin farmhand candy cane yoga mat chisel swordfish raincoat crowbar flip flop saxophone blender moonbeam crepe paper cactus jester moose toothpick tango accordion helmet dartboard acrobat pebble pleated skirt cashew balloon whisk pinecone xylophone lip gloss ostrich feather zipper croissant peacock feather nightingale pigeonholed pepperoni pizza beagle gargoyle poodle vegetable garden wicker basket colander tennis ball feather duster mailbox frisbee bookshelf electric fan caterpillar leather jacket doorknob green beans starfish geyser keyboard daisy seashell telephone booth tarantula slumber party meatball night light flip chart ferris wheel wire cutters pancake garlic bread stapler dolphin skateboard hay bale caterpillar bulldozer blackberry muffin bedspread hoop earring lizard cherry blossom tooth fairy thunder popcorn kernel razor blade shoelace milkman water hose celery saddlebag peppermint steam engine zeppelin silk scarf birdbath cable car bubble bath stopwatch jukebox saxophone player scrunchie spatula tornado cactus plant shopping cart yogurt lighthouse drumstick asphalt driveway quill bonsai tree chrysanthemum bandaid sparrow drool monkey bars jellyfish toothpaste compass peanut butter jelly sandwich brass knuckles orange juice vending machine coffee cup tadpole sweet potato pencil sharpener cartoon blacktop giraffe print cowbell cactus juice cheeseburger hammock reindeer lightning bolt ruby whistle songbird gumball machine leaf blower moustache turtle shell prairie dog bowling ball chipmunk snowflake avocado toast tree branch denim jacket snowman trench slippery guitar shriek galaxy hammer jagged magnet deep gamut joust artisan peacock thunderbolt captain sardine spacewalk octopus tetherball loudspeaker digit mauve jam sarcasm tuxedo speckle linger kerfuffle burp spinach echo freight brainwash daffodil cantaloupe alleyway yawn flock cannonball incense mermaid citadel updraft pantsuit kink creek turtle peckish battering ram scribble halogen gelatin tambourine ironclad bratwurst melon hula hoop tusk waffle iron spear ruffle jigsaw puzzle thump hurricane stallion farmstead gingerbread superman outback glue cemetery orchid sprout hunchback ninja encyclopedia misty giraffe metronome caveman nibble wigwam gnarled seahorse mastodon waltz chameleon pufferfish vampire sleepyhead parachute mischief oxygen chinup thud basilica possum toothbrush doghouse tiger mosquito flicker craft room humidifier flute hopscotch yodel loafer sizzle mustard pretzel icicle lobster gumdrop loom puppeteer hoodie bumblebee pandemonium radio cobra kaleidoscope spaghetti hairbrush welder anemone polo shirt shadow cassette player bubblegum tuna melt doorstep ostrich sunflower postcard pelican mortar boa constrictor geyser thunderstorm ramshackle avocado calliope camper gooseberry iris stepladder leotard jellybean rooster scale rattlesnake witchcraft nozzle fortress figment cream puff chariot cotillion bubble wrap cricket anteater telescope monkey wrench haymaker germ cloud tenor saxophone watermelon doubledecker bus bugle slinky sapphire kangaroo windmill iguana chainsaw watering can scooter ankle bracelet water bottle board game ringworm acorn keyhole pelican crossing molehill skunk minivan butterfly honey bee jumper cable bell pepper megaphone tentacle coin flipper rockstar sawdust wristband penny whistle mastiff trumpet serpent castle cucumber chalkboard koala hammerhead taffy roadrunner syrup sarsaparilla raisin farmhand candy cane yoga mat chisel swordfish raincoat crowbar flip flop saxophone blender moonbeam crepe paper cactus jester moose toothpick tango accordion helmet dartboard acrobat pebble pleated skirt cashew balloon whisk pinecone xylophone lip gloss ostrich feather zipper croissant peacock feather nightingale pigeonholed pepperoni pizza beagle gargoyle poodle vegetable garden wicker basket colander tennis ball feather duster mailbox frisbee bookshelf electric fan caterpillar leather jacket doorknob green beans starfish geyser keyboard daisy seashell telephone booth tarantula slumber party meatball night light flip chart ferris wheel wire cutters pancake garlic bread stapler dolphin skateboard hay bale caterpillar bulldozer blackberry muffin bedspread hoop earring lizard cherry blossom tooth fairy thunder popcorn kernel razor blade shoelace milkman water hose celery saddlebag peppermint steam engine zeppelin silk scarf birdbath cable car bubble bath stopwatch jukebox saxophone player scrunchie spatula tornado cactus plant shopping cart yogurt lighthouse drumstick asphalt driveway quill bonsai tree chrysanthemum bandaid sparrow drool monkey bars jellyfish toothpaste compass peanut butter jelly sandwich brass knuckles orange juice vending machine coffee cup tadpole sweet potato pencil sharpener cartoon blacktop giraffe print cowbell cactus juice cheeseburger hammock reindeer lightning bolt ruby whistle songbird gumball machine leaf blower moustache turtle shell prairie dog bowling ball chipmunk snowflake avocado toast tree branch denim jacket snowman trench slippery guitar shriek galaxy hammer jagged magnet deep gamut joust artisan peacock thunderbolt captain sardine spacewalk octopus tetherball loudspeaker digit mauve jam sarcasm tuxedo speckle linger kerfuffle burp spinach echo freight brainwash daffodil cantaloupe alleyway yawn flock cannonball incense mermaid citadel updraft pantsuit kink creek turtle peckish battering ram scribble halogen gelatin tambourine ironclad bratwurst melon hula hoop tusk waffle iron spear ruffle jigsaw puzzle thump hurricane stallion farmstead gingerbread superman outback glue cemetery orchid sprout hunchback ninja encyclopedia misty giraffe metronome caveman nibble wigwam gnarled seahorse mastodon waltz chameleon pufferfish vampire sleepyhead parachute mischief oxygen chinup thud basilica possum toothbrush doghouse tiger mosquito flicker craft room humidifier flute hopscotch yodel loafer sizzle mustard pretzel icicle lobster gumdrop loom puppeteer hoodie bumblebee pandemonium radio cobra kaleidoscope spaghetti hairbrush welder anemone polo shirt shadow cassette player bubblegum tuna melt doorstep ostrich sunflower postcard pelican mortar boa constrictor geyser thunderstorm ramshackle avocado calliope camper gooseberry iris stepladder leotard jellybean rooster scale rattlesnake witchcraft nozzle fortress figment cream puff chariot cotillion bubble wrap cricket anteater telescope monkey wrench haymaker germ cloud tenor saxophone watermelon doubledecker bus bugle slinky sapphire kangaroo windmill iguana chainsaw watering can scooter ankle bracelet water bottle board game ringworm acorn keyhole pelican crossing molehill skunk minivan butterfly honey bee jumper cable bell pepper megaphone tentacle coin flipper rockstar sawdust wristband penny whistle mastiff trumpet serpent castle cucumber chalkboard koala hammerhead taffy roadrunner syrup sarsaparilla raisin farmhand candy cane yoga mat chisel swordfish raincoat crowbar flip flop saxophone blender moonbeam crepe paper cactus jester moose toothpick tango accordion helmet dartboard acrobat pebble pleated skirt cashew balloon whisk pinecone xylophone lip gloss ostrich feather zipper croissant peacock feather nightingale pigeonholed pepperoni pizza beagle gargoyle poodle vegetable garden wicker basket colander tennis ball feather duster mailbox frisbee bookshelf electric fan caterpillar leather jacket doorknob green beans starfish geyser keyboard daisy seashell telephone booth tarantula slumber party meatball night light flip chart ferris wheel wire cutters pancake garlic bread stapler dolphin skateboard hay bale caterpillar bulldozer blackberry muffin bedspread hoop earring lizard cherry blossom tooth fairy thunder popcorn kernel razor blade shoelace milkman water hose celery saddlebag peppermint steam engine zeppelin silk scarf birdbath cable car bubble bath stopwatch jukebox saxophone player scrunchie spatula tornado cactus plant shopping cart yogurt lighthouse drumstick asphalt driveway quill bonsai tree chrysanthemum bandaid sparrow drool monkey bars jellyfish toothpaste compass peanut butter jelly sandwich brass knuckles orange juice vending machine coffee cup tadpole sweet potato pencil sharpener cartoon blacktop giraffe print cowbell cactus juice cheeseburger hammock reindeer lightning bolt ruby whistle songbird gumball machine leaf blower moustache turtle shell prairie dog bowling ball chipmunk snowflake avocado toast tree branch denim jacket snowman trench slippery guitar shriek galaxy hammer jagged magnet deep gamut joust artisan peacock thunderbolt captain sardine spacewalk octopus tetherball loudspeaker digit mauve jam sarcasm tuxedo speckle linger kerfuffle burp spinach echo freight brainwash daffodil cantaloupe alleyway yawn flock cannonball incense mermaid citadel updraft pantsuit kink creek turtle peckish battering ram scribble halogen gelatin tambourine ironclad bratwurst melon hula hoop tusk waffle iron spear ruffle jigsaw puzzle thump hurricane stallion farmstead gingerbread superman outback glue cemetery orchid sprout hunchback ninja encyclopedia misty giraffe metronome caveman nibble wigwam gnarled seahorse mastodon waltz chameleon pufferfish vampire sleepyhead parachute mischief oxygen chinup thud basilica possum toothbrush doghouse tiger mosquito flicker craft room humidifier flute hopscotch yodel loafer sizzle mustard pretzel icicle lobster gumdrop loom puppeteer hoodie bumblebee pandemonium radio cobra kaleidoscope spaghetti hairbrush welder anemone polo shirt shadow cassette player bubblegum tuna melt doorstep ostrich sunflower postcard pelican mortar boa constrictor geyser thunderstorm ramshackle avocado calliope camper gooseberry iris stepladder leotard jellybean rooster scale rattlesnake witchcraft nozzle fortress figment cream puff chariot cotillion bubble wrap cricket anteater telescope monkey wrench haymaker germ cloud tenor saxophone watermelon doubledecker bus bugle slinky sapphire kangaroo windmill iguana chainsaw watering can scooter ankle bracelet water bottle board game ringworm acorn keyhole pelican crossing molehill skunk minivan butterfly honey bee jumper cable bell pepper megaphone tentacle coin flipper rockstar sawdust wristband penny whistle mastiff trumpet serpent castle cucumber chalkboard koala hammerhead taffy roadrunner syrup sarsaparilla raisin farmhand candy cane yoga mat chisel swordfish raincoat crowbar flip flop saxophone blender moonbeam crepe paper cactus jester moose toothpick tango accordion helmet dartboard acrobat pebble pleated skirt cashew balloon whisk pinecone xylophone lip gloss ostrich feather zipper croissant peacock feather nightingale pigeonholed pepperoni pizza beagle gargoyle poodle vegetable garden wicker basket colander tennis ball feather duster mailbox frisbee bookshelf electric fan caterpillar leather jacket doorknob green beans starfish geyser keyboard daisy seashell telephone booth tarantula slumber party meatball night light flip chart ferris wheel wire cutters pancake garlic bread stapler dolphin skateboard hay bale caterpillar bulldozer blackberry muffin bedspread hoop earring lizard cherry blossom tooth fairy thunder popcorn kernel razor blade shoelace milkman water hose celery saddlebag peppermint steam engine zeppelin silk scarf birdbath cable car bubble bath stopwatch jukebox saxophone player scrunchie spatula tornado cactus plant shopping cart yogurt lighthouse drumstick asphalt driveway quill bonsai tree chrysanthemum bandaid sparrow drool monkey bars jellyfish toothpaste compass peanut butter jelly sandwich brass knuckles orange juice vending machine coffee cup tadpole sweet potato pencil sharpener cartoon blacktop giraffe print cowbell cactus juice cheeseburger hammock reindeer lightning bolt ruby whistle songbird gumball machine leaf blower moustache turtle shell prairie dog bowling ball chipmunk snowflake avocado toast tree branch denim jacket snowman trench slippery guitar shriek galaxy hammer jagged magnet deep gamut joust artisan peacock thunderbolt captain sardine spacewalk octopus tetherball loudspeaker digit mauve jam sarcasm tuxedo speckle linger kerfuffle burp spinach echo freight brainwash daffodil cantaloupe alleyway yawn flock cannonball incense mermaid citadel updraft pantsuit kink creek turtle peckish battering ram scribble halogen gelatin tambourine ironclad bratwurst melon hula hoop tusk waffle iron spear ruffle jigsaw puzzle thump hurricane stallion farmstead gingerbread superman outback glue cemetery orchid sprout hunchback ninja encyclopedia misty giraffe metronome caveman nibble wigwam gnarled seahorse mastodon waltz chameleon pufferfish vampire sleepyhead parachute mischief oxygen chinup thud basilica possum toothbrush doghouse tiger mosquito flicker craft room humidifier flute hopscotch yodel loafer sizzle mustard pretzel icicle lobster gumdrop loom puppeteer hoodie bumblebee pandemonium radio cobra kaleidoscope spaghetti hairbrush welder anemone polo shirt shadow cassette player bubblegum tuna melt doorstep ostrich sunflower postcard pelican mortar boa constrictor geyser thunderstorm ramshackle avocado calliope camper gooseberry iris stepladder leotard jellybean rooster scale rattlesnake witchcraft nozzle fortress figment cream puff chariot cotillion bubble wrap cricket anteater telescope monkey wrench haymaker germ cloud tenor saxophone watermelon doubledecker bus bugle slinky sapphire kangaroo windmill iguana chainsaw watering can scooter ankle bracelet water bottle board game ringworm acorn keyhole pelican crossing molehill skunk minivan butterfly honey bee jumper cable bell pepper megaphone tentacle coin flipper rockstar sawdust wristband penny whistle mastiff trumpet serpent castle cucumber chalkboard koala hammerhead taffy roadrunner syrup sarsaparilla raisin farmhand candy cane yoga mat chisel swordfish raincoat crowbar flip flop saxophone blender moonbeam crepe paper cactus jester moose toothpick tango accordion helmet dartboard acrobat pebble pleated skirt cashew balloon whisk pinecone xylophone lip gloss ostrich feather zipper croissant peacock feather nightingale pigeonholed pepperoni pizza beagle gargoyle poodle vegetable garden wicker basket colander tennis ball feather duster mailbox frisbee bookshelf electric fan caterpillar leather jacket doorknob green beans starfish geyser keyboard daisy seashell telephone booth tarantula slumber party meatball night light flip chart ferris wheel wire cutters pancake garlic bread stapler dolphin skateboard hay bale caterpillar bulldozer blackberry muffin bedspread hoop earring lizard cherry blossom tooth fairy thunder popcorn kernel razor blade shoelace milkman water hose celery saddlebag peppermint steam engine zeppelin silk scarf birdbath cable car bubble bath stopwatch jukebox saxophone player scrunchie spatula tornado cactus plant shopping cart yogurt lighthouse drumstick asphalt driveway quill bonsai tree chrysanthemum bandaid sparrow drool monkey bars jellyfish toothpaste compass peanut butter jelly sandwich brass knuckles orange juice vending machine coffee cup tadpole sweet potato pencil sharpener cartoon blacktop giraffe print cowbell cactus juice cheeseburger hammock reindeer lightning bolt ruby whistle songbird gumball machine leaf blower moustache turtle shell prairie dog bowling ball chipmunk snowflake avocado toast tree branch denim jacket snowman trench";
  }
  else {
    secret1 = false;
    textReset1 = false;
    const poke1 = document.getElementById("this");
    poke1.textContent = "Web Development languages:";
    const poke2 = document.getElementById("that");
    poke2.textContent = "HTML for structure";
    const poke3 = document.getElementById("thing");
    poke3.textContent = "CSS for style";
  }
};



// Text Replacement (Insults)
let I = document.getElementById("I");
I.onclick = () => {
  if (textReset2 == false) {
    secret2 = true;
    textReset2 = true;
    const insult1 = document.getElementById("insultThing");
    insult1.textContent = "You suck so much that I can not possibly put it into writing.";
    insult1.setAttribute("class", "")
    const insult2 = document.getElementById("insultThing2");
    insult2.textContent = "But I can put it into numbers -1/10";
  }
  else {
    secret2 = false;
    textReset2 = false;
    const insult1 = document.getElementById("insultThing");
    insult1.textContent = "Adobe Flash for interactivity";
    insult1.setAttribute("class", "strike")
    const insult2 = document.getElementById("insultThing2");
    insult2.textContent = "JavaScript for interactivity";
  }
};

//Image (The Future)
let img1 = document.getElementById("img");
img1.onclick = () => {
  const imgF = document.getElementById("imgC");
  const Src1 = imgF.getAttribute("src");
  if (Src1 != "meme.png") {
    imgF.setAttribute("src", "meme.png");
    imgF.setAttribute("class", "imgThing2");
  }
  else {
    imgF.setAttribute("src", "coders.png");
    imgF.setAttribute("class", "imgThing");
  }
};

//Image (Man)
let img2 = document.getElementById("img2");
img2.onclick = () => {
  const imgM = document.getElementById("imgC");
  const Src2 = imgM.getAttribute("src");
  if (Src2 != "fish.png") {
    imgM.setAttribute("src", "fish.png");
    imgM.setAttribute("class", "imgThing");
  }
  else {
    imgM.setAttribute("src", "coders.png");
    imgM.setAttribute("class", "imgThing");
  }
};

//Random Number (Background)
let RBC = document.getElementById("RBC");
RBC.onclick = () => {
  let numRanR = Math.floor(Math.random() * 226);
  let numRanG = Math.floor(Math.random() * 226);
  let numRanB = Math.floor(Math.random() * 226);
  document.getElementById("html").style.background = "rgb(" + numRanR + ", " + numRanG + ", " + numRanB + ")";
}

//Variable Storage (User)
let myHeading = document.getElementById("header");
let userA = document.getElementById("US");
function setUserName() {
  const myName = prompt("Please enter your name.\nNo data is being given to third parties.");
  if (!myName) {
  }
  else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName + ".";
  }
}
if (localStorage.getItem("name")) {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome, " + storedName + ".";
}
userA.onclick = () => {
  setUserName();
};