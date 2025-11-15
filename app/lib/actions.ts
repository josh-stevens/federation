'use server';

interface PicardResponse {
  extract: string;
  personnelImages: Array<string>;
}

// TODO: parameterize and use BASE_URL
// TODO: error handling
export async function fetchPicard(): Promise<PicardResponse> {
  const extractFetch = fetch("http://localhost:3000/api/py/extract?title=Jean-Luc_Picard");
  const imagesFetch = fetch("http://localhost:3000/api/py/personnel-images?title=Jean-Luc_Picard");
  const responses = await Promise.all([extractFetch, imagesFetch]);
  const jsonResponses = await Promise.all(responses.map(response => response.json()));
  console.log(jsonResponses[1].personnelImages)
  return {
    "extract": jsonResponses[0].extract,
    "personnelImages": jsonResponses[1].personnelImages
  };
}

export async function fetchRiker(): Promise<PicardResponse> {
  const extractFetch = fetch("http://localhost:3000/api/py/extract?title=William_T._Riker");
  const imagesFetch = fetch("http://localhost:3000/api/py/personnel-images?title=William_T._Riker");
  const responses = await Promise.all([extractFetch, imagesFetch]);
  const jsonResponses = await Promise.all(responses.map(response => response.json()));
  console.log(jsonResponses[1].personnelImages)
  return {
    "extract": jsonResponses[0].extract,
    "personnelImages": jsonResponses[1].personnelImages
  };
}