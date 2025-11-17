type Officer = {
  title: string;
  rank: string;
}

export const OFFICERS: {[key: string]: Officer} = {
  "picard": {
    title: "Jean-Luc_Picard",
    rank: "Captain",
  },
  "riker": {
    title: "William_T._Riker",
    rank: "Commander",
  },
  "laforge": {
    title: "Geordi_La_Forge",
    rank: "Lieutenant Commander",
  },
  "yar": {
    title: "Natasha_Yar",
    rank: "Lieutenant",
  },
  "worf": {
    title: "Worf",
    rank: "Lieutenant",
  },
  "crusher": {
    title: "Beverly_Crusher",
    rank: "Commander",
  },
  "troi": {
    title: "Deanna_Troi",
    rank: "Lieutenant Commander",
  },
  "data": {
    title: "Data",
    rank: "Lieutenant Commander",
  },
  "wesley": {
    title: "Wesley_Crusher",
    rank: "Cadet",
  },
  "obrien": {
    title: "Miles_O'Brien",
    rank: "Chief Petty Officer",
  },
  "pulaski": {
    title: "Katherine_Pulaski",
    rank: "Commander",
  },
  "laren": {
    title: "Ro_Laren",
    rank: "Lieutenant",
  },
}