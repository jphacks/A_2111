from fastapi import FastAPI, Form, status
from fastapi.responses import JSONResponse
import uvicorn
import crud
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    # TODO: フロントエンドデプロイしたらそのURLも入れる
    "http://localhost:3000",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "this is root"}


@app.get("/members")
async def get_members():
    members = await crud.get_all_members()
    resp = {
        "status": "ok",
        "count": len(members),
        "data": members
    }
    return resp


@app.get("/familiars")
async def get_familiars():
    familiars = await crud.get_all_familiars()
    resp = {
        "status": "ok",
        "count": len(familiars),
        "data": familiars
    }
    return resp


@app.post("/member")
async def post_member(
    name: str = Form(...),
):
    uuid = await crud.create_member(name)
    return JSONResponse(content={"status": "ok", "uuid": uuid, "name": name}, status_code=status.HTTP_201_CREATED)

# これはちょっとどうしたら良いか分からないので飛ばす
@app.post("/familiar")
async def post_familiar(
    # 書き方合っているのか？
    start: str = Form(...),
    end: str = Form(...),
):

    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


@app.put("/member")
# async def put_member():
# return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)
# "Form(...)"を付け加えるとqueryがつく。？
async def put_member(uuid, name: str = Form(...)):
    print(4)
    result = await crud.update_member(uuid, name)
    print(5)
    return result

# 何を消したいんだっけ
@app.delete("/member")
async def delete_member(uuid):
    print(uuid)
    await crud.remove_member(uuid)
    print(crud.remove_member(uuid))
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


@app.delete("familiar")
async def delete_familiar():
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)
