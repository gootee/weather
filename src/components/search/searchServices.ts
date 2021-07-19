interface state {
  [stateName: string]: string
}

const unitedStates: state = {
  "al": "US-AL",
  "alabama": "US-AL",
  "ak": "US-AK",
  "alaska": "US-AK",
  "az": "US-AZ",
  "arizona": "US-AZ",
  "ar": "US-AR",
  "arkansas": "US-AR",
  "ca": "US-CA",
  "california": "US-CA",
  "co": "US-CO",
  "colorado": "US-CO",
  "ct": "US-CT",
  "connecticut": "US-CT",
  "de": "US-DE",
  "delaware": "US-DE",
  "fl": "US-FL",
  "florida": "US-FL",
  "ga": "US-GA",
  "georgia": "US-GA",
  "hi": "US-HI",
  "hawaii": "US-HI",
  "id": "US-ID",
  "idaho": "US-ID",
  "il": "US-IL",
  "illinois": "US-IL",
  "in": "US-IN",
  "indiana": "US-IN",
  "ia": "US-IA",
  "iowa": "US-IA",
  "ks": "US-KS",
  "kansas": "US-KSI",
  "ky": "US-KY",
  "kentucky": "US-KY",
  "la": "US-LA",
  "louisiana": "US-LA",
  "me": "US-ME",
  "maine": "US-ME",
  "md": "US-MD",
  "maryland": "US-MD",
  "ma": "US-MA",
  "massachusetts": "US-MA",
  "mi": "US-MI",
  "michigan": "US-MI",
  "mn": "US-MN",
  "minnesota": "US-MN",
  "ms": "US-MS",
  "mississippi": "US-MS",
  "mo": "US-MO",
  "missouri": "US-MD",
  "mt": "US-MT",
  "montana": "US-MT",
  "ne": "US-NE",
  "nebraska": "US-NE",
  "nv": "US-NV",
  "nevada": "US-NV",
  "nh": "US-NH",
  "new hampshire": "US-NH",
  "nj": "US-NJ",
  "new jersey": "US-NJ",
  "nm": "US-NM",
  "new mexico": "US-NM",
  "ny": "US-NY",
  "new york": "US-NY",
  "nc": "US-NC",
  "north carolina": "US-NC",
  "nd": "US-ND",
  "north dakota": "US-ND",
  "oh": "US-OH",
  "ohio": "US-OH",
  "ok": "US-OK",
  "oklahoma": "US-OK",
  "or": "US-OR",
  "oregon": "US-OR",
  "pa": "US-PA",
  "pennsylvania": "US-PA",
  "ri": "US-RI",
  "rhode island": "US-RI",
  "sc": "US-SC",
  "south carolina": "US-SC",
  "sd": "US-SD",
  "south dakota": "US-SD",
  "tn": "US-TN",
  "tennessee": "US-TN",
  "tx": "US-TX",
  "texas": "US-TX",
  "ut": "US-UT",
  "utah": "US-UT",
  "vt": "US-VT",
  "vermont": "US-VT",
  "va": "US-VA",
  "virginia": "US-VA",
  "wa": "US-WA",
  "washington": "US-WA",
  "wv": "US-WV",
  "west virginia": "US-WV",
  "wi": "US-WI",
  "wisconsin": "US-WI",
  "wy": "US-WY",
  "wyoming": "US-WY",
  "dc": "US-DC",
  "district of columbia": "US-DC",
  "as": "US-AS",
  "american samoa": "US-AS",
  "gu": "US-GU",
  "guam": "US-GU",
  "mp": "US-MP",
  "northern mariana islands": "US-MP",
  "pr": "US-PR",
  "puerto rico": "US-PR",
  "um": "US-UM",
  "united states minor outlying islands": "US-UM",
  "vi": "US-VI",
  "u.s. virgin islands": "US-VI",
}

export const getFormattedSearchCity = (cityText: string): string => {
  let city: string = ""
  const cityWords: string[] = cityText.split(",")
  for (let i=0; i<cityWords.length; i++) {
    let cityWord: string = cityWords[i].trim()
    if (unitedStates.hasOwnProperty(cityWord) && i>0) {
      cityWord=unitedStates[cityWord]
    }
    city+= i < cityWords.length - 1 ? cityWord + "," : cityWord
  }
  return city
}

export const convertFromKelvin = (kelvinTemp: number, format: string = "c"): number => {
  let convertedTemp: number = 0
  if (!kelvinTemp || kelvinTemp === 0) {
    return 0
  }

  switch (format.toLowerCase()) {
    case "c":
      convertedTemp = Math.floor(kelvinTemp - 273.15)
      break;
    case "f":
      convertedTemp = Math.floor(((kelvinTemp - 273.15) * 9/5) + 32)
      break;
    default:
      convertedTemp = kelvinTemp
      break;
  }
  return convertedTemp
}