from fastapi import FastAPI, HTTPException
import httpx
import uvicorn

app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

EXTRACT_URL = 'https://memory-alpha.fandom.com/api.php?action=query&prop=extracts&exsentences=10&explaintext=1&format=json'
IMAGES_URL = 'https://memory-alpha.fandom.com/api.php?action=query&generator=images&prop=imageinfo|images&imlimit=max&iiprop=url&format=json'

@app.get("/api/py/extract")
async def get_extract(title: str):
  async with httpx.AsyncClient() as client:
    try:
      response = await client.get(EXTRACT_URL + f"&titles={title}")
      return response.json()
    except Exception as e:
      return e

@app.get("/api/py/images")
async def get_images(title: str):
  async with httpx.AsyncClient() as client:
    try:
      response = await client.get(IMAGES_URL + f"&titles={title}")
      return response.json()
    except Exception as e:
      raise HTTPException(status_code=400)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
