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

# /member?uuid=<id>
@app.get("/member")
async def get_member(uuid: str):
    member = await crud.get_member(uuid)
    print("member", member)
    resp = {
        "status": "ok",
        "data": member
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

@app.get("/familiar")
async def get_familiar(uuid: str):
    member = await crud.get_familiar(uuid)
    print(f"familiars of {uuid}: ", member)
    resp = {
        "status": "ok",
        "data": member
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
    start: str = Form(...),
    end: str = Form(...),
):
    await crud.create_familiar(start, end)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


@app.put("/member")
# async def put_member():
# return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)
# "Form(...)"を付け加えるとqueryがつく。？
async def put_member(uuid: str, name: str = Form(...)):
    print(4)
    result = await crud.update_member(uuid, name)
    print(5)
    return result


@app.delete("/member")
async def delete_member(uuid: str):
    await crud.remove_member(uuid)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)

# TODO: memberをdeleteしたらfamiliarも削除しないといけない
# TODO: PUTとDELETEについてdataが空ならエラーメッセージ 

@app.delete("/familiar")
async def delete_familiar(uuid: str):
    await crud.remove_familiar(uuid)
    return JSONResponse(content={"status": "ok"}, status_code=status.HTTP_201_CREATED)


if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)
