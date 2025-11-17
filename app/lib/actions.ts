'use server';

interface PersonnelResponse {
  extract: string;
  personnelImages: Array<string>;
}

// TODO: parameterize and use BASE_URL from env
// TODO: error handling
export async function fetchPersonnel(personnel: string): Promise<PersonnelResponse> {
  const extractFetch = fetch(`http://localhost:3000/api/py/extract?title=${personnel}`);
  const imagesFetch = fetch(`http://localhost:3000/api/py/personnel-images?title=${personnel}`);
  const responses = await Promise.all([extractFetch, imagesFetch]);
  const jsonResponses = await Promise.all(responses.map(response => response.json()));
  return {
    "extract": jsonResponses[0].extract,
    "personnelImages": jsonResponses[1].personnelImages
  };
}
