users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(u){
  let languageString = ""
  for (var i = 0; i < u.length; i++){
    for (var j = 0; j < u[i]["languages"].length; j++){
      if (j < u[i]["languages"].length - 1){
        languageString += `${u[i]["languages"][j]}, `
      } else {
        languageString += `and ${u[i]["languages"][j]}`
      }
      
    }
    console.log(`${u[i]["fname"]} ${u[i]["lname"]} knows ${languageString}`)
    languageString = ""
  }
}

userLanguages(users)