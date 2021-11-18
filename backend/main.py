import json
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
    "https://coconomask.web.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ルート
@app.get("/")
async def root():
    return {"message": "this is root"}


# 登録情報を全て取得
@app.get("/members")
async def get_members():
    members = await crud.get_all_members()
    resp = {
        "status": "ok",
        "count": len(members),
        "data": members
    }
    return resp


# 特定の登録情報を取得
@app.get("/member")
async def get_member(uuid: str = Form(...)):
    member = await crud.get_member(uuid)
    resp = {
        "status": "ok",
        "data": member
    }
    return resp


# リレーションを全て取得
@app.get("/familiars")
async def get_familiars():
    familiars = await crud.get_all_familiars()
    resp = {
        "status": "ok",
        "count": len(familiars),
        "data": familiars
    }
    return resp


# 特定のリレーションを取得
@app.get("/familiar")
async def get_familiar(uuid: str = Form(...)):
    member = await crud.get_familiar(uuid)
    if len(member) == 0:
        return JSONResponse(content={"status": "error", "message": "このIDは見つかりません"}, status_code=status.HTTP_404_NOT_FOUND)
    resp = {
        "status": "ok",
        "data": member
    }
    return resp


# メンバー登録
@app.post("/member")
async def post_member(
    name: str = Form(...),
    size: str = Form(...),
    vector: str = Form(...)
):
    vector = list(map(float, vector[1:-1].split(",")))
    uuid = await crud.create_member(name, size, vector)
    return JSONResponse(content={"status": "ok", "uuid": uuid, "name": name, "size": size, "vector": vector}, status_code=status.HTTP_201_CREATED)


# リレーション登録
@app.post("/familiar")
async def post_familiar(
    start: str = Form(...),
    end: str = Form(...)
):
    await crud.existed_familiar(start, end)
    await crud.create_familiar(start, end)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


# 登録情報を更新
@app.put("/member")
async def put_member(
    uuid: str = Form(...),
    name: str = Form(...),
    size: str = Form(...)
):
    await crud.update_member(uuid, name, size)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


# 登録情報を削除
@app.delete("/member")
async def delete_member(uuid: str = Form(...)):
    await crud.remove_member(uuid)
    await crud.remove_familiar_related_member(uuid)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


# 特定のリレーションを削除
@app.delete("/familiar")
async def delete_familiar(
    start: str = Form(...),
    end: str = Form(...)
):
    await crud.remove_familiar(start, end)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


# ログイン用
@app.post("/login")
async def login(
    uuid: str = Form(...),
    vector: str = Form(...)
):
    vector = list(map(float, vector[1:-1].split(",")))
    cosine_similarity = await crud.login(uuid, vector)
    return JSONResponse(content={"status": "ok", "uuid": uuid, "cosine": cosine_similarity}, status_code=status.HTTP_202_ACCEPTED)


# 起動
if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)
