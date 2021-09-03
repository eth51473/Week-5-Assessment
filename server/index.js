const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let counter =-1

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You will be meeting someone very important to you soon",
					 " you might want to avoid corndogs for the next few days",
					 "When the chance for a new opportunity arises, you should take it.",
           "A close friend needs your help",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/motivation", (req, res) => {
  const quotes = ["It always seems impossible until it's done.- Nelson Mandela",
					 "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - Nelson Mandela",
					 "Life is 10% what happens to you and 90% how you react to it. - Some Guy",
           "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be. - Ken Venturi",
           "Either I will find a way, or I will make one - Philip Sidney",
           "Be kind whenever possible. It is always possible. - Dalai Lama",
           "Life’s not about how hard of a hit you can give… it’s about how many you can take, and still keep moving forward.- Rocky",
  ];

  // Goes through qoutes 1 by 1
  if (counter < quotes.length-1){
    counter +=1
  }else{
    counter = 0
  }
  
  res.status(200).send(quotes[counter]);
  
});

app.get("/api/colors/:id", (req, res) => {
  let hexCodes = {
    Red: "#f54242",
    Blue: "#42b9f5",
    Green: "#42f545",
    Orange: "#f5b342",
}
    let hexCode = hexCodes[req.params.id]
  res.status(200).send(hexCode);
  
});


app.listen(4000, () => console.log("Server running on 4000"));
