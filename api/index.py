from fastapi import FastAPI, HTTPException
import httpx
import uvicorn
import re

app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

EXTRACT_URL = 'https://memory-alpha.fandom.com/api.php?action=query&prop=extracts&exsentences=10&explaintext=1&format=json'
IMAGES_URL = 'https://memory-alpha.fandom.com/api.php?action=query&generator=images&prop=imageinfo|images&gimlimit=max&iiprop=url&format=json'

# Map personnel from their page title prop to how their name appears in image filenames
PERSONNEL_MAP = {
  "Jean-Luc_Picard": "Jean-Luc Picard",
  "William_T._Riker": "William Riker",
  "Geordi_La_Forge": "Geordi La Forge",
  "Natasha_Yar": "Natasha Yar",
  "Worf": "Worf",
  "Beverly_Crusher": "Beverly Crusher",
  "Deanna_Troi": "Deanna Troi",
  "Data": "Data",
  "Wesley_Crusher": "Wesley Crusher",
  "Miles_O'Brien": "Miles O'Brien",
  "Katherine_Pulaski": "Katherine Pulaski",
  "Ro_Laren": "Ro Laren"
}

@app.get("/api/py/extract")
async def get_extract(title: str):
  async with httpx.AsyncClient() as client:
    try:
      response = await client.get(EXTRACT_URL + f"&titles={title}")
      json = response.json()
      pages = json.get("query", {"pages": {}}).get("pages", {})
      for _, (_, value) in enumerate(pages.items()):
        return { "extract": value.get("extract") }
    except Exception as e:
      return e

@app.get("/api/py/personnel-images")
async def get_personnel_images(title: str):
  async with httpx.AsyncClient() as client:
    try:
      response = await client.get(IMAGES_URL + f"&titles={title}")
      json = response.json()
      pages = json.get("query", {"pages": {}}).get("pages", {})
      images = []
      for _, (_, value) in enumerate(pages.items()):
        if re.search(f"File:{PERSONNEL_MAP[title]}.*.jpg", value.get("title")):
          imageinfo = value.get("imageinfo")[0]
          images.append(imageinfo.get("url").replace("//static", "//vignette"))
      return { "personnelImages": images }
    except Exception as e:
      raise HTTPException(status_code=400)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
