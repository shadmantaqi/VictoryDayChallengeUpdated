//facts array
let facts = [
    "The GDP of Bangladesh is $195.1 billion.",
    "The nominal GDP per capita is $3,900.",
    "The main ethnic group in Bangladesh is Bengali, comprising at least 98% of the population.",
    "Close to 90% of the population are Muslims.",
    "Bangla, or Bengali, is the official language.",
    "Over half of the residents of Bangladesh are in the farming industry.",
    "The left hand is considered unclean, so it is customary to always use the right hand when shaking hands, eating, or passing items to another person.",
    "Bangladesh has over 2,000 daily newspapers and periodicals.",
    "The most popular sport in Bangladesh is cricket.",
    "Bangladesh is unusual in that it has six different seasons. In addition to summer, autumn, winter, and spring, it also has rainy and cool seasons.",
    "In terms of size, Bangladesh is only about one-tenth the size of Alaska.",
    "The Bay of Bengal is the longest bay in the entire world.",
    "Bangladesh is the 8th most populous country in the world.",
    "It is also the 5th most populous country in Asia.",
    "The capital, Dhaka, is the largest city in Bangladesh.",
    "Bazar Beach is 75 miles long and is one of the longest beaches in the world.",
    "There are approximately 700 rivers flowing throughout the country.",
    "Three of the largest rivers in Asia flow through Bangladesh. Those rivers are the Ganges, the Meghna, and the Brahmaputra.",
    "Approximately 67% of the land in Bangladesh is arable.",
    "Three UNESCO World Heritage sites are located in Bangladesh, including the Mosque City of Bagerhat.",
    "Rice is a staple food in Bangladesh and is often served with an assortment of curries.",
    "Three percent of the world’s tea comes from Bangladesh. The industry also employs about four million people.",
    "The Royal Bengal Tiger is the country’s national animal.",
    "Bangladesh has a parliamentary republic type of government.",
    "The name “Bangladesh” means “Country of Bengal.”",
    "Mahasthangarh is the oldest city in Bangladesh.",
    "Dhaka is one of the largest cities in the world. It is known as the City of Mosques.",
    "The country has the third largest Muslim population in the world.",
    "Many of the country’s historical sites and landmarks have been destroyed by flooding.",
    "Bangladesh has a prime minister that is the head of government, and a president that is the head of state.",
    "The prime minister is appointed by the president. The president serves for a total of five years per term and can only serve two terms.",
    "There are approximately 3,000 people per square mile, making this country one of the most densely populated on earth.",
    "Bangladesh has had a rapidly growing economy over the last few years, boasting about 6% growth annually from 1996 to 2008.",
    "Alluvial soil deposited from the flooding rivers has created ideal conditions for farming.",
    "Kabaddi is the country’s national game. The unique thing about this game is that it has no set rules.",
    "Bangladesh has a total of 17 airports.",
    "The people of Bangladesh do not smile, but this doesn’t mean they aren’t friendly. Smiling is considered a sign of immaturity in this culture.",
    "Bangladesh gained its independence from Pakistan in 1971.",
    "One of the largest mangrove forests in the world is located in Bangladesh.",
    "The national fruit of the country is Jackfruit.",
    "The cyclone of 1970 was one of the country’s worst national disaster. It is estimated that as many as 500,000 people were killed.",
    "The Pohela Boishakh is a huge part of Bengali culture. It takes place in April, and it is the country’s new year’s celebration.",
    "The Sundarbans Delta is the largest river delta in the world.",
    "Bengali currency, Taka, translates to “currency.”",
    "The garment industry of Bangladesh is flourishing, and it is responsible for the majority of the country’s exports.",
    "Bangladesh is home to 53 public universities.",
    "Students receive primary education for five years, followed by three secondary programs.",
    "Over 10% of the land is comprised of forests.",
    "Females in rural areas are not required to attend school.",
    "Bangladesh typically sees over 60 inches of rainfall each year, with rainfalls heaviest during monsoon season."
];

function randomFact() {

    const randomValue = Math.floor(Math.random() * facts.length);
    let data = document.getElementById('generate-fact');
    data.className = "btn btn-danger text-light";
    data.innerHTML = facts[randomValue];
}