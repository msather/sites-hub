// Puget Sound fishing data. Edit this file to change content; the page renders from it.
// Months are 1-12. "months" = typically open/available, "peak" = best weeks.
// IMPORTANT: seasons shift every year. Always confirm with WDFW before fishing.
window.FISHING = {
  links: {
    regs: "https://wdfw.wa.gov/fishing/regulations",
    emergency: "https://wdfw.wa.gov/fishing/regulations/emergency-rule-changes",
    tides: "https://tidesandcurrents.noaa.gov/tide_predictions.html",
    currents: "https://tidesandcurrents.noaa.gov/cdata/StationList?type=Current+Data&keyword=pug",
    areaMap: "https://wdfw.wa.gov/fishing/locations/marine-areas"
  },
  areas: [
    {
      id: "5", name: "Marine Area 5", place: "Sekiu and Pillar Point (western Strait)",
      summary: "Gateway to the Strait of Juan de Fuca. Big water, strong current, big fish. Mostly boat fishing out of Sekiu and Pillar Point.",
      hotspots: [
        { name: "Sekiu / Slip Point", access: "boat", note: "Classic summer Chinook and coho mooching and trolling along the kelp edge." },
        { name: "Pillar Point", access: "boat", note: "Staging for halibut and lingcod; protected launch." },
        { name: "Clallam Bay", access: "shore", note: "Shore access for bottomfish and surfperch where open." }
      ],
      fish: [
        { name: "Chinook", group: "salmon", months: [7, 8, 9], peak: [8], depth: "20-90 ft", notes: "Fish the kelp edges and rips on moving water." },
        { name: "Coho", group: "salmon", months: [8, 9], peak: [9], depth: "10-60 ft", notes: "Shallower in the morning; follow the bait." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8], depth: "20-50 ft", notes: "Strong runs in odd-numbered years only." },
        { name: "Lingcod", group: "bottomfish", months: [5, 6], peak: [5], depth: "40-120 ft", notes: "Short spring season; rocky reefs." },
        { name: "Halibut", group: "bottomfish", months: [5, 6], peak: [5], depth: "100-300 ft", notes: "Very limited days; check dates and quotas." }
      ],
      tides: "Current matters more than tide height. Fish the build of a moving tide near points, and avoid peak ripping current. Check current predictions for Neah Bay and Strait stations.",
      lures: [
        { name: "Cut-plug herring with flasher", targets: "Chinook", note: "Green or blue label herring, 11 in flasher, 36-48 in leader." },
        { name: "Hoochie, 4-6 in", targets: "Coho, Chinook", note: "Pink, white or glow behind a flasher or dodger." },
        { name: "Spoon (Kingfisher, Coho Killer)", targets: "Coho", note: "Trolled 2.2-2.8 mph." },
        { name: "Diamond jig / butterfly jig", targets: "Lingcod, halibut", note: "6-16 oz depending on current." }
      ],
      station: { id: "9443090", name: "Neah Bay" },
      zone: "pzz131",
      launches: ["Sekiu Marina launch", "Pillar Point County Park launch"],
      tips: "Troll 2.0-2.6 mph for Chinook, faster for coho. Weather and swell can change quickly in the Strait."
    },
    {
      id: "6", name: "Marine Area 6", place: "Eastern Strait: Port Angeles to Port Townsend",
      summary: "Productive open-water salmon and bottomfish area with good access from Port Angeles, Dungeness and Port Townsend.",
      hotspots: [
        { name: "Ediz Hook (Port Angeles)", access: "boat/shore", note: "Shore anglers cast for pinks and coho off the hook in season." },
        { name: "Dungeness Spit / Dungeness Bay", access: "boat", note: "Summer salmon, bait along the spit edge." },
        { name: "Protection Island", access: "boat", note: "Rips and kelp beds hold salmon and lingcod." },
        { name: "Point Wilson", access: "boat/shore", note: "Strong tidal rip; salmon travel through here." }
      ],
      fish: [
        { name: "Chinook", group: "salmon", months: [7, 8, 9], peak: [8], depth: "30-100 ft", notes: "Troll or mooch the rips at the points." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8], depth: "10-40 ft", notes: "Huge numbers in odd years; easy shore and boat fishing." },
        { name: "Coho", group: "salmon", months: [8, 9, 10], peak: [9], depth: "10-50 ft", notes: "Surface-oriented in low light." },
        { name: "Lingcod", group: "bottomfish", months: [5, 6], peak: [5], depth: "40-120 ft", notes: "Rocky structure and kelp; short season." },
        { name: "Dungeness crab", group: "shellfish", months: [7, 8, 9], peak: [7], depth: "20-100 ft", notes: "Pots only; check summer season and catch card rules." }
      ],
      tides: "Fish the flood into the bays and the ebb off the points. Dungeness Spit is best on a good tide change; avoid the strongest mid-tide current at Point Wilson.",
      lures: [
        { name: "Pink hoochie", targets: "Pinks, coho", note: "Trolled behind a small flasher or dodger." },
        { name: "Buzz Bomb / Point Wilson dart", targets: "Pinks, coho (shore)", note: "Cast and retrieve at dawn." },
        { name: "Herring with flasher", targets: "Chinook", note: "Mooch or troll at depth near the points." },
        { name: "Swimbait / jig", targets: "Lingcod", note: "On structure in 40-100 ft." }
      ],
      station: { id: "9444090", name: "Port Angeles" },
      zone: "pzz132",
      launches: ["Port Angeles Boat Haven launch", "Port Townsend Boat Haven launch"],
      tips: "Pinks run in numbers from August in odd years. Early morning surface fishing is best in the summer."
    },
    {
      id: "7", name: "Marine Area 7", place: "San Juan Islands and Rosario Strait",
      summary: "Scenic and productive. Summer Chinook on the famous banks, strong tidal currents, and lots of structure.",
      hotspots: [
        { name: "Salmon Bank / Hein Bank", access: "boat", note: "Offshore banks on the south end of San Juan Island; big Chinook in summer." },
        { name: "Lopez Island (Iceberg Point)", access: "boat", note: "Kelp edges and strong current." },
        { name: "Cattle Pass", access: "boat", note: "Powerful rip; fish carefully on slack-ish tides." },
        { name: "Rosario Strait / Allan Island", access: "boat", note: "Good for coho and pinks in late summer." }
      ],
      fish: [
        { name: "Chinook", group: "salmon", months: [7, 8, 9], peak: [8], depth: "40-120 ft", notes: "Mooch or downrig near bait." },
        { name: "Coho", group: "salmon", months: [8, 9, 10], peak: [9], depth: "10-60 ft", notes: "Along kelp and island edges." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8], depth: "10-50 ft", notes: "Heavy in odd years." },
        { name: "Lingcod", group: "bottomfish", months: [5, 6], peak: [5], depth: "30-120 ft", notes: "Rocky reefs and ledges." },
        { name: "Spot prawn", group: "shellfish", months: [5, 6], peak: [5], depth: "200-400 ft", notes: "Pots only; short, scheduled season." }
      ],
      tides: "Fish the tide change and the first hours of the flood or ebb. Some spots (Salmon Bank, Iceberg Point) fish best on a large exchange; avoid peak flow in the passes.",
      lures: [
        { name: "Helmeted herring with flasher", targets: "Chinook", note: "Classic mooching and trolling rig." },
        { name: "Hoochie / Coho Killer spoon", targets: "Coho", note: "Troll 2.5-3.0 mph." },
        { name: "Blue Fox / Dick Nite spoon", targets: "Coho, pinks", note: "Light trolling." },
        { name: "Large jigs / swimbaits", targets: "Lingcod", note: "On structure." }
      ],
      station: { id: "9449880", name: "Friday Harbor" },
      zone: "pzz133",
      launches: ["Washington Park boat launch Anacortes", "Friday Harbor boat launch", "Squalicum Harbor boat launch Bellingham"],
      tips: "Check current tables before heading out. Fog and wind change quickly; many anglers run out of Anacortes or Bellingham."
    },
    {
      id: "8", name: "Marine Area 8", place: "Skagit Bay, Port Susan and Everett (8-1, 8-2)",
      summary: "North-central sound with river mouths, shallow flats and convenient launches in Everett and Stanwood.",
      hotspots: [
        { name: "Hat Island", access: "boat", note: "Salmon and bottomfish near the island." },
        { name: "Port Susan / Gedney Island", access: "boat", note: "Rips and tide lines hold salmon." },
        { name: "Everett waterfront / Jetty Island", access: "shore", note: "Pier and beach fishing for pinks and coho." },
        { name: "Skagit Bay", access: "boat", note: "Shallow bay with river influence; check closures." }
      ],
      fish: [
        { name: "Chinook (blackmouth)", group: "salmon", months: [1, 2, 3, 4], peak: [2, 3], depth: "80-160 ft", notes: "When winter season is open. Check regulations." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8], depth: "10-40 ft", notes: "Strong in odd years." },
        { name: "Coho", group: "salmon", months: [8, 9, 10], peak: [9], depth: "10-50 ft", notes: "Off the river mouths and along tide lines." },
        { name: "Chum", group: "salmon", months: [10, 11, 12], peak: [11], depth: "5-30 ft", notes: "Late fall near river mouths." }
      ],
      tides: "Fish the tide change near river mouths. Incoming tides push bait and fish into the bays; outgoing tides concentrate fish at points and tide lines.",
      lures: [
        { name: "Hoochie", targets: "Coho, pinks, chum", note: "Pink, white or green; 3-4 in." },
        { name: "Spoon (Blue Fox, Pixie)", targets: "Coho, chum", note: "Cast from shore or troll slow." },
        { name: "Herring with flasher", targets: "Chinook", note: "In winter, fished deeper near bottom structure." }
      ],
      station: { id: "9447659", name: "Everett" },
      zone: "pzz135",
      launches: ["Port of Everett boat launch", "Mukilteo boat launch"],
      tips: "Watch the weather: wind builds quickly in Port Susan. Check area-specific closures around river mouths."
    },
    {
      id: "9", name: "Marine Area 9", place: "Admiralty Inlet, Possession Bar, Edmonds and Point No Point",
      summary: "One of the most popular areas: year-round activity, famous winter blackmouth, and lots of public piers and boat launches.",
      hotspots: [
        { name: "Possession Bar", access: "boat", note: "Popular winter Chinook (blackmouth) spot." },
        { name: "Point No Point", access: "boat/shore", note: "Chinook, coho and pinks; a famous salmon point." },
        { name: "Edmonds Pier / Edmonds Underwater Park", access: "shore", note: "Winter squid, pinks and coho from the pier." },
        { name: "Marrowstone Point / Fort Flagler", access: "boat/shore", note: "Rips hold salmon; good bottomfish near the point." }
      ],
      fish: [
        { name: "Chinook (blackmouth)", group: "salmon", months: [11, 12, 1, 2, 3, 4], peak: [1, 2, 3], depth: "80-180 ft", notes: "Winter season when open; fish bait near the bottom." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8], depth: "10-50 ft", notes: "Huge odd-year runs." },
        { name: "Coho", group: "salmon", months: [8, 9, 10], peak: [9], depth: "10-60 ft", notes: "Off the points and tide rips." },
        { name: "Squid", group: "shellfish", months: [10, 11, 12, 1, 2, 3], peak: [12, 1, 2], depth: "surface", notes: "Night fishing from piers with squid jigs." },
        { name: "Lingcod", group: "bottomfish", months: [5, 6], peak: [5], depth: "40-120 ft", notes: "Rocky reefs and kelp." },
        { name: "Cutthroat / resident coho", group: "trout", months: [3, 4, 5, 6, 10, 11], peak: [4, 5], depth: "shallow", notes: "Beach fishing, spoons and flies." }
      ],
      tides: "Possession Bar and Point No Point fish best around the start of the flood or the end of the ebb. Strong flood currents can make fishing difficult; watch the current predictions.",
      lures: [
        { name: "Herring with flasher / Hotspot dodger", targets: "Blackmouth", note: "Fish near bottom on a downrigger." },
        { name: "Squid jig (egi)", targets: "Squid", note: "Glow colors at night near pier lights." },
        { name: "Pink hoochie", targets: "Pinks", note: "Trolled with a flasher or cast with weight." },
        { name: "Coho Killer / Dick Nite spoon", targets: "Coho", note: "Troll 2.5-3.0 mph." }
      ],
      station: { id: "9444900", name: "Port Townsend" },
      zone: "pzz134",
      launches: ["Port of Edmonds boat launch", "Port of Kingston boat launch", "Mukilteo boat launch"],
      tips: "Blackmouth are bait-sensitive in winter; a clean, fresh herring tends to outperform. Many anglers launch at Edmonds, Everett or Pt No Point."
    },
    {
      id: "10", name: "Marine Area 10", place: "Seattle, Bainbridge and Bremerton",
      summary: "The urban center of the sound. Easy launch access, strong winter blackmouth, and notable fall chum and pink runs.",
      hotspots: [
        { name: "Jefferson Head / Meadow Point", access: "boat", note: "Blackmouth and coho on the edges." },
        { name: "Elliott Bay", access: "boat/shore", note: "Pinks, coho and chum near the waterfront." },
        { name: "Blake Island", access: "boat", note: "Structure and tide rips hold salmon." },
        { name: "Pier 86 / Seacrest Pier", access: "shore", note: "Squid and winter-run salmon; shore access." }
      ],
      fish: [
        { name: "Chinook (blackmouth)", group: "salmon", months: [11, 12, 1, 2, 3, 4], peak: [1, 2, 3], depth: "80-180 ft", notes: "Winter fishery when open." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8, 9], depth: "10-40 ft", notes: "Elliott Bay and Shilshole are popular." },
        { name: "Coho", group: "salmon", months: [9, 10], peak: [9], depth: "10-60 ft", notes: "Edges and tide lines." },
        { name: "Chum", group: "salmon", months: [10, 11, 12], peak: [11], depth: "5-30 ft", notes: "Late-fall run; shallow and close to shore." },
        { name: "Squid", group: "shellfish", months: [10, 11, 12, 1, 2, 3], peak: [12, 1, 2], depth: "surface", notes: "Night fishing from piers." }
      ],
      tides: "Fish the tide change and the first hours of the ebb in Elliott Bay. Pier fishing is generally best around slack to the start of the ebb.",
      lures: [
        { name: "Herring with flasher", targets: "Blackmouth", note: "Mooching or downrigger." },
        { name: "Pink hoochie", targets: "Pinks", note: "Small 3-in hoochies are common." },
        { name: "Spoon (Pixie, Blue Fox)", targets: "Chum, coho", note: "Cast from piers and beaches." },
        { name: "Squid jig (egi)", targets: "Squid", note: "Glow colors at night." }
      ],
      station: { id: "9447130", name: "Seattle" },
      zone: "pzz135",
      launches: ["Shilshole Bay Marina Seattle", "Eagle Harbor Bainbridge Island boat launch", "Port Orchard boat launch"],
      tips: "Check closures around the Duwamish and Lake Washington Ship Canal. Be mindful of heavy ferry and shipping traffic."
    },
    {
      id: "11", name: "Marine Area 11", place: "Tacoma, Vashon Island and Commencement Bay",
      summary: "Home of the famous Point Defiance fishery, with strong winter Chinook and fall salmon runs.",
      hotspots: [
        { name: "Point Defiance (Pt D)", access: "boat/shore", note: "Famous for Chinook, coho and squid; strong tide rips." },
        { name: "Commencement Bay", access: "boat", note: "Pinks, coho and chum near river mouths." },
        { name: "Dalco Passage", access: "boat", note: "Rips hold winter Chinook." },
        { name: "Dash Point Pier", access: "shore", note: "Squid and bottomfish." }
      ],
      fish: [
        { name: "Chinook (blackmouth)", group: "salmon", months: [11, 12, 1, 2, 3, 4], peak: [1, 2, 3], depth: "80-180 ft", notes: "Winter season when open; Pt D is a classic." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8, 9], depth: "10-40 ft", notes: "Strong odd-year runs." },
        { name: "Coho", group: "salmon", months: [9, 10], peak: [9], depth: "10-60 ft", notes: "Off the points and river mouths." },
        { name: "Chum", group: "salmon", months: [10, 11, 12], peak: [11], depth: "5-30 ft", notes: "Fall run; close to shore." },
        { name: "Squid", group: "shellfish", months: [10, 11, 12, 1, 2, 3], peak: [12, 1, 2], depth: "surface", notes: "Night fishing from piers." }
      ],
      tides: "Point Defiance fishes best on the early flood and the end of the ebb. Strong currents can make fishing difficult mid-tide; check predictions.",
      lures: [
        { name: "Herring with flasher / dodger", targets: "Chinook", note: "Downrigger near the bottom." },
        { name: "Hoochie, 3-4 in", targets: "Coho, pinks", note: "Pink, white or green." },
        { name: "Buzz Bomb / spoon", targets: "Chum, coho (shore)", note: "Cast and retrieve." },
        { name: "Squid jig (egi)", targets: "Squid", note: "At night near pier lights." }
      ],
      station: { id: "9446484", name: "Tacoma" },
      zone: "pzz135",
      launches: ["Des Moines Marina boat launch", "Point Defiance Boathouse Marina Tacoma"],
      tips: "Pt D is crowded on weekends. Watch for tug and barge traffic in Commencement Bay."
    },
    {
      id: "12", name: "Marine Area 12", place: "Hood Canal",
      summary: "A long glacial fjord with excellent fall chum fishing, resident species, and shrimp and crab opportunities.",
      hotspots: [
        { name: "Hoodsport", access: "boat/shore", note: "Famous for late-fall chum." },
        { name: "Misery Point", access: "boat/shore", note: "Chum, coho and squid." },
        { name: "Pleasant Harbor", access: "boat", note: "Protected water and structure." },
        { name: "Twanoh / Belfair (south end)", access: "shore", note: "Chum and cutthroat." }
      ],
      fish: [
        { name: "Chum", group: "salmon", months: [10, 11, 12], peak: [11], depth: "5-30 ft", notes: "Hood Canal is known for fall chum." },
        { name: "Coho", group: "salmon", months: [9, 10], peak: [9], depth: "10-50 ft", notes: "Near the river mouths." },
        { name: "Pink salmon (odd years)", group: "salmon", months: [8, 9], peak: [8], depth: "10-40 ft", notes: "In odd years." },
        { name: "Spot prawn / shrimp", group: "shellfish", months: [5, 6], peak: [5], depth: "200-350 ft", notes: "Pots only; scheduled days." },
        { name: "Cutthroat / resident coho", group: "trout", months: [3, 4, 5, 6, 10, 11], peak: [4, 5], depth: "shallow", notes: "Beach fishing with spoons or flies." }
      ],
      tides: "Hood Canal has gentler currents than the main sound. Fish the tide change near river mouths and the first hours of the flood on the beaches.",
      lures: [
        { name: "Chum jig / fly (pink, green, chartreuse)", targets: "Chum", note: "Cast from shore or troll slow." },
        { name: "Spoon (Pixie, Blue Fox)", targets: "Coho, cutthroat", note: "Light casting." },
        { name: "Hoochie", targets: "Pinks, coho", note: "3-in hoochie behind a small flasher." }
      ],
      station: { id: "9445272", name: "Quilcene" },
      zone: "pzz135",
      launches: ["Misery Point boat launch Hood Canal", "Pleasant Harbor Marina Brinnon", "Twanoh State Park boat launch"],
      tips: "Hypoxia (low oxygen) can affect fish in late summer; check WDFW notices. Be mindful of tides on the south-end flats."
    },
    {
      id: "13", name: "Marine Area 13", place: "South Sound: Olympia, Anderson Island and Nisqually",
      summary: "Protected waters with a strong winter Chinook fishery, a fall chum run and good shore access.",
      hotspots: [
        { name: "Dana Passage / Johnson Point", access: "boat", note: "Winter blackmouth and coho." },
        { name: "Anderson Island", access: "boat", note: "Structure and tide lines." },
        { name: "Nisqually flats / Luhr Beach", access: "boat/shore", note: "Coho and chum in fall." },
        { name: "Olympia waterfront", access: "shore", note: "Squid and bottomfish from piers in winter." }
      ],
      fish: [
        { name: "Chinook (blackmouth)", group: "salmon", months: [11, 12, 1, 2, 3, 4], peak: [1, 2, 3], depth: "80-160 ft", notes: "Winter season when open." },
        { name: "Coho", group: "salmon", months: [9, 10], peak: [9], depth: "10-60 ft", notes: "Near the river mouths." },
        { name: "Chum", group: "salmon", months: [10, 11, 12], peak: [11], depth: "5-30 ft", notes: "Late-fall run." },
        { name: "Squid", group: "shellfish", months: [10, 11, 12, 1, 2, 3], peak: [12, 1, 2], depth: "surface", notes: "Night fishing from piers." },
        { name: "Cutthroat / resident coho", group: "trout", months: [3, 4, 5, 6, 10, 11], peak: [4, 5], depth: "shallow", notes: "Beach fishing." }
      ],
      tides: "South Sound has big tide swings. Fish the last of the flood and the first of the ebb on points and passes; the flats fish best around high tide.",
      lures: [
        { name: "Herring with flasher / dodger", targets: "Chinook", note: "Downrigger near the bottom." },
        { name: "Hoochie / spoon", targets: "Coho", note: "Pink or white." },
        { name: "Chum jig / fly", targets: "Chum", note: "Pink, green, chartreuse." },
        { name: "Squid jig (egi)", targets: "Squid", note: "At night near pier lights." }
      ],
      station: { id: "9446969", name: "Olympia" },
      zone: "pzz135",
      launches: ["Boston Harbor Marina Olympia", "Luhr Beach boat launch Nisqually", "Zittel's Marina Olympia"],
      tips: "Large tide swings expose the flats quickly. Bring a tide table and watch the water on shore trips."
    }
  ]
};
