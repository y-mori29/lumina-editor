from fastapi import FastAPI, File, UploadFile
from fastapi.responses import Response
from rembg import remove

app = FastAPI()

@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
  data = await file.read()
  result = remove(data)
  return Response(content=result, media_type="image/png")

if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app, host="0.0.0.0", port=7000)
