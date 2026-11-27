// Seattle grunge guide data. Edit here; the page renders from it.
// Facts here are summarised from general knowledge. Every item links onward so readers can dig deeper.
window.GRUNGE = {
  eras: [
    { id: "roots", label: "Roots (1981-1988)" },
    { id: "breakout", label: "Breakout (1989-1991)" },
    { id: "peak", label: "Peak (1992-1994)" },
    { id: "after", label: "After (1995 on)" }
  ],
  timeline: [
    { year: "1981", era: "roots", title: "The word \"grunge\" appears", text: "Mark Arm (later of Green River and Mudhoney) uses the word \"grunge\" in print to describe a band's dirty, noisy sound. It is an early use of the label that later defined a scene.", link: ["Grunge on Wikipedia", "https://en.wikipedia.org/wiki/Grunge"] },
    { year: "1984", era: "roots", title: "Green River and Soundgarden form", text: "Seattle bands start mixing punk speed with heavy metal weight. In nearby Aberdeen, the Melvins are already playing slow, crushing riffs that will inspire the scene.", link: ["Green River", "https://en.wikipedia.org/wiki/Green_River_(band)"] },
    { year: "1986", era: "roots", title: "Deep Six compilation", text: "A compilation brings together Green River, Soundgarden, the Melvins, Malfunkshun, Skin Yard and the U-Men: a first snapshot of the Seattle sound.", link: ["Deep Six", "https://en.wikipedia.org/wiki/Deep_Six_(album)"] },
    { year: "1988", era: "roots", title: "Sub Pop builds the sound", text: "Bruce Pavitt and Jonathan Poneman turn Sub Pop into a full record label. Early singles from Mudhoney and Nirvana, often recorded by producer Jack Endino, give the scene a look and a sound.", link: ["Sub Pop", "https://en.wikipedia.org/wiki/Sub_Pop"] },
    { year: "1989", era: "breakout", title: "Nirvana's Bleach", text: "Nirvana's first album comes out on Sub Pop and is reportedly recorded for only a few hundred dollars. Soundgarden's Louder Than Love shows that a Seattle band can sign to a major label.", link: ["Bleach", "https://en.wikipedia.org/wiki/Bleach_(album)"] },
    { year: "1990", era: "breakout", title: "Loss and new bands", text: "Andrew Wood, singer of Mother Love Bone, dies before the band's debut album Apple is released. His friends respond with the Temple of the Dog project. Alice in Chains release their debut, Facelift.", link: ["Mother Love Bone", "https://en.wikipedia.org/wiki/Mother_Love_Bone"] },
    { year: "1991", era: "breakout", title: "The big three albums", text: "Pearl Jam's Ten (August), Nirvana's Nevermind (September) and Soundgarden's Badmotorfinger (October) arrive within weeks of each other. Temple of the Dog's one album also appears this year. Seattle music suddenly goes worldwide.", link: ["Nevermind", "https://en.wikipedia.org/wiki/Nevermind"] },
    { year: "1992", era: "peak", title: "Nevermind reaches number one", text: "Nevermind climbs to the top of the US album chart in January. Alice in Chains release Dirt, the film Singles (set in Seattle's scene) opens, and Screaming Trees put out Sweet Oblivion.", link: ["Dirt", "https://en.wikipedia.org/wiki/Dirt_(Alice_in_Chains_album)"] },
    { year: "1993", era: "peak", title: "In Utero and Vs.", text: "Nirvana release the raw, noisy In Utero in September. Pearl Jam's Vs. sets a first-week sales record. Nirvana also tape their MTV Unplugged performance.", link: ["In Utero", "https://en.wikipedia.org/wiki/In_Utero"] },
    { year: "1994", era: "peak", title: "Superunknown, and a turning point", text: "Alice in Chains' Jar of Flies debuts at number one, and Soundgarden's Superunknown (with \"Black Hole Sun\") is a huge hit. In April, Kurt Cobain dies, a loss that many see as the end of the scene's first era. Pearl Jam release Vitalogy in November.", link: ["Superunknown", "https://en.wikipedia.org/wiki/Superunknown"] },
    { year: "1995", era: "after", title: "Mad Season", text: "A supergroup of Seattle musicians including Layne Staley of Alice in Chains and Mike McCready of Pearl Jam release Above.", link: ["Mad Season", "https://en.wikipedia.org/wiki/Mad_Season"] },
    { year: "1996", era: "after", title: "Alice in Chains Unplugged", text: "Alice in Chains play their MTV Unplugged show, one of the best remembered performances of the era.", link: ["Alice in Chains", "https://en.wikipedia.org/wiki/Alice_in_Chains"] },
    { year: "1997", era: "after", title: "Soundgarden break up", text: "Soundgarden split after a long run of albums and tours. Pearl Jam and others keep going.", link: ["Soundgarden", "https://en.wikipedia.org/wiki/Soundgarden"] },
    { year: "2002", era: "after", title: "Losing Layne Staley", text: "Alice in Chains singer Layne Staley dies, closing another chapter of the story.", link: ["Layne Staley", "https://en.wikipedia.org/wiki/Layne_Staley"] },
    { year: "2017", era: "after", title: "Losing Chris Cornell", text: "Soundgarden and Temple of the Dog singer Chris Cornell dies. Fans around the world, and the city of Seattle, mourn.", link: ["Chris Cornell", "https://en.wikipedia.org/wiki/Chris_Cornell"] }
  ],
  bands: [
    { name: "Nirvana", from: "Aberdeen, WA", years: "1987-1994", people: "Kurt Cobain, Krist Novoselic, Dave Grohl (from 1990)", albums: ["Bleach (1989)", "Nevermind (1991)", "In Utero (1993)"], blurb: "Mixed punk energy with pop melodies and loud-quiet dynamics. Nevermind made alternative rock mainstream.", link: ["Nirvana on Wikipedia", "https://en.wikipedia.org/wiki/Nirvana_(band)"] },
    { name: "Pearl Jam", from: "Seattle, WA", years: "1990-today", people: "Eddie Vedder, Stone Gossard, Jeff Ament, Mike McCready", albums: ["Ten (1991)", "Vs. (1993)", "Vitalogy (1994)"], blurb: "Formed from the remains of Mother Love Bone. Known for big anthemic songs and for standing up to the ticketing industry.", link: ["Pearl Jam on Wikipedia", "https://en.wikipedia.org/wiki/Pearl_Jam"] },
    { name: "Soundgarden", from: "Seattle, WA", years: "1984-1997, 2010-2017", people: "Chris Cornell, Kim Thayil, Matt Cameron, Ben Shepherd", albums: ["Badmotorfinger (1991)", "Superunknown (1994)", "Down on the Upside (1996)"], blurb: "Heavy riffs, unusual time signatures and one of rock's great voices. Hits include \"Spoonman\" and \"Black Hole Sun\".", link: ["Soundgarden on Wikipedia", "https://en.wikipedia.org/wiki/Soundgarden"] },
    { name: "Alice in Chains", from: "Seattle, WA", years: "1987-today", people: "Layne Staley, Jerry Cantrell, Sean Kinney, Mike Inez", albums: ["Facelift (1990)", "Dirt (1992)", "Jar of Flies (1994)"], blurb: "Heavy metal weight with close, haunting vocal harmonies. \"Man in the Box\" and \"Would?\" are signature songs.", link: ["Alice in Chains on Wikipedia", "https://en.wikipedia.org/wiki/Alice_in_Chains"] },
    { name: "Mudhoney", from: "Seattle, WA", years: "1988-today", people: "Mark Arm, Steve Turner, Dan Peters, Matt Lukin", albums: ["Superfuzz Bigmuff (1988)", "Every Good Boy Deserves Fudge (1991)"], blurb: "Sub Pop's flagship band. Fuzzy, loud and funny; \"Touch Me I'm Sick\" is a scene classic.", link: ["Mudhoney on Wikipedia", "https://en.wikipedia.org/wiki/Mudhoney"] },
    { name: "Mother Love Bone", from: "Seattle, WA", years: "1988-1990", people: "Andrew Wood, Stone Gossard, Jeff Ament, Greg Gilmore, Bruce Fairweather", albums: ["Apple (1990)"], blurb: "A glam-tinged band with a magnetic singer. After Andrew Wood's death, members went on to form Pearl Jam.", link: ["Mother Love Bone on Wikipedia", "https://en.wikipedia.org/wiki/Mother_Love_Bone"] },
    { name: "Screaming Trees", from: "Ellensburg, WA", years: "1984-2000", people: "Mark Lanegan, Gary Lee Conner, Van Conner", albums: ["Sweet Oblivion (1992)"], blurb: "Psychedelic rock with Lanegan's deep voice. \"Nearly Lost You\" appeared in the film Singles.", link: ["Screaming Trees on Wikipedia", "https://en.wikipedia.org/wiki/Screaming_Trees"] },
    { name: "Melvins", from: "Aberdeen, WA", years: "1983-today", people: "Buzz Osborne and Dale Crover (core)", albums: ["Houdini (1993)"], blurb: "Slow, heavy and huge. A major influence on Nirvana and on the whole scene's sound.", link: ["Melvins on Wikipedia", "https://en.wikipedia.org/wiki/Melvins"] },
    { name: "Green River", from: "Seattle, WA", years: "1984-1987", people: "Mark Arm, Steve Turner, Stone Gossard, Jeff Ament", albums: ["Dry as a Bone (1987)", "Rehab Doll (1988)"], blurb: "Often called the first grunge band. When they split, members formed Mudhoney and Mother Love Bone.", link: ["Green River on Wikipedia", "https://en.wikipedia.org/wiki/Green_River_(band)"] },
    { name: "Temple of the Dog", from: "Seattle, WA", years: "1990-1991", people: "Chris Cornell with members of Pearl Jam and Soundgarden", albums: ["Temple of the Dog (1991)"], blurb: "A tribute to Andrew Wood. Best known for \"Hunger Strike\", which features Eddie Vedder.", link: ["Temple of the Dog on Wikipedia", "https://en.wikipedia.org/wiki/Temple_of_the_Dog"] }
  ],
  places: [
    { name: "The Crocodile", area: "Belltown, Seattle", text: "A club that opened in 1991 and became a home base for the scene. It reopened in 2016 after a closure and still hosts live music.", query: "The Crocodile Seattle" },
    { name: "Moore Theatre", area: "Downtown Seattle", text: "A historic theatre where Pearl Jam filmed the video for \"Alive\" in 1991.", query: "Moore Theatre Seattle" },
    { name: "Museum of Pop Culture (MoPOP)", area: "Seattle Center", text: "A museum with exhibits about music, including Seattle's. Check current exhibits before visiting.", query: "Museum of Pop Culture Seattle", link: ["mopop.org", "https://www.mopop.org/"] },
    { name: "Sub Pop Records", area: "Seattle", text: "The record label that put Seattle on the map, started by Bruce Pavitt and Jonathan Poneman. Still releasing music today.", query: "Sub Pop Records Seattle", link: ["subpop.com", "https://www.subpop.com/"] },
    { name: "Reciprocal Recording", area: "Ballard, Seattle", text: "The studio where producer Jack Endino recorded many early records, including Nirvana's Bleach. The studio has since closed, but its sound lives on in the records.", query: "Ballard Seattle" },
    { name: "Central Saloon", area: "Pioneer Square, Seattle", text: "A very old Seattle saloon that has hosted live music for decades, including grunge-era bands.", query: "Central Saloon Seattle" },
    { name: "Viretta Park", area: "Madison Park, Seattle", text: "A small quiet park next to Kurt Cobain's former home, where fans leave messages. Please be respectful of the neighbours.", query: "Viretta Park Seattle" },
    { name: "Aberdeen, Washington", area: "About 1.5 to 2 hours southwest of Seattle", text: "Hometown of Kurt Cobain and the Melvins. You can visit the Kurt Cobain Memorial Park and Kurt Cobain Landing by the river.", query: "Kurt Cobain Memorial Park Aberdeen Washington", link: ["Aberdeen on Wikipedia", "https://en.wikipedia.org/wiki/Aberdeen,_Washington"] }
  ],
  quiz: [
    { q: "Which Seattle label released Nirvana's first album, Bleach?", options: ["Sub Pop", "Geffen", "A&M", "Epic"], answer: 0, why: "Bleach (1989) came out on Sub Pop. Nirvana moved to Geffen for Nevermind." },
    { q: "In which Washington town did Nirvana form?", options: ["Seattle", "Aberdeen", "Tacoma", "Olympia"], answer: 1, why: "Kurt Cobain and Krist Novoselic grew up in Aberdeen." },
    { q: "Who was the singer of Soundgarden?", options: ["Layne Staley", "Eddie Vedder", "Chris Cornell", "Mark Arm"], answer: 2, why: "Chris Cornell fronted Soundgarden and Temple of the Dog." },
    { q: "Which band's singer, Andrew Wood, died before their debut album came out?", options: ["Mudhoney", "Mother Love Bone", "Screaming Trees", "Alice in Chains"], answer: 1, why: "Mother Love Bone's Apple was released after Wood's death in 1990." },
    { q: "Temple of the Dog was created as a tribute to whom?", options: ["Kurt Cobain", "Layne Staley", "Andrew Wood", "Jimi Hendrix"], answer: 2, why: "Chris Cornell wrote songs for his late friend Andrew Wood." },
    { q: "Which 1992 film is set in Seattle's music scene?", options: ["Singles", "Reality Bites", "Wayne's World", "Pump Up the Volume"], answer: 0, why: "Cameron Crowe's Singles featured Seattle bands and used scene locations." },
    { q: "Which album was number one in the US in January 1992?", options: ["Ten", "Nevermind", "Dirt", "Badmotorfinger"], answer: 1, why: "Nevermind reached number one in January 1992." },
    { q: "Which came first?", options: ["Pearl Jam's Ten", "Pearl Jam's Vs.", "Pearl Jam's Vitalogy", "Pearl Jam's No Code"], answer: 0, why: "Ten (1991), then Vs. (1993), Vitalogy (1994) and No Code (1996)." },
    { q: "Which two bands grew out of Green River?", options: ["Mudhoney and Mother Love Bone", "Nirvana and Soundgarden", "Pearl Jam and Alice in Chains", "Melvins and Screaming Trees"], answer: 0, why: "Mark Arm and Steve Turner formed Mudhoney; Stone Gossard and Jeff Ament formed Mother Love Bone." },
    { q: "Which band's 1994 album Superunknown included \"Black Hole Sun\"?", options: ["Soundgarden", "Alice in Chains", "Mudhoney", "Pearl Jam"], answer: 0, why: "Superunknown (1994) was Soundgarden's biggest album." },
    { q: "Which Alice in Chains album came out in 1992?", options: ["Facelift", "Dirt", "Jar of Flies", "Alice in Chains (1995)"], answer: 1, why: "Dirt (1992), with \"Rooster\" and \"Would?\"." },
    { q: "Who founded Sub Pop?", options: ["Bruce Pavitt and Jonathan Poneman", "Jack Endino and Chris Cornell", "Kurt Cobain and Krist Novoselic", "Ann and Nancy Wilson"], answer: 0, why: "Pavitt and Poneman built Sub Pop into the label of the scene." }
  ],
  more: [
    ["Grunge (overview)", "https://en.wikipedia.org/wiki/Grunge"],
    ["Seattle music history at HistoryLink", "https://www.historylink.org/"],
    ["Museum of Pop Culture", "https://www.mopop.org/"],
    ["Sub Pop Records", "https://www.subpop.com/"],
    ["Singles (1992 film)", "https://en.wikipedia.org/wiki/Singles_(1992_film)"],
    ["Kurt Cobain", "https://en.wikipedia.org/wiki/Kurt_Cobain"]
  ]
};
