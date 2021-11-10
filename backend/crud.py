from fastapi import HTTPException, status
import os
from uuid import uuid4
from firebase import db
from firebase_admin import firestore


async def get_all_members():
    docs = db.collection("members").stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    return data


async def get_member(uuid: str):
    docs = db.collection("members").where("uuid", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    return data


async def get_all_familiars():
    docs = db.collection("familiars").stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    return data


async def get_familiar(uuid: str):
    docs = db.collection("familiars").where("start", "==", uuid).stream()
    docs2 = db.collection("familiars").where("end", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    for doc in docs2:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    return data


async def create_member(name: str, size: str) -> str:
    if size != "S" and size != "M" and size != "L":
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="S、M、Lのいずれかを入力してください")
    uuid = str(uuid4())
    doc_ref = db.collection("members").document()
    doc_ref.set({
        "uuid": uuid,
        "name": name,
        "size": size
    })
    return uuid


async def create_familiar(start: str, end: str):
    doc_ref = db.collection("familiars").document()
    doc_ref.set({
        "start": start,
        "end": end
    })
    return True


async def existed_familiar(start: str, end: str):
    docs = db.collection("familiars").where("start", "==", start).where("end", "==", end).stream()
    docs2 = db.collection("familiars").where("start", "==", end).where("end", "==", start).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
        
    for doc in docs2:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)

    if len(data) != 0:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="このIDはすでに登録されています")
    return True



async def update_member(uuid: str, name: str, size: str):
    if size != "S" and size != "M" and size != "L":
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="S、M、Lのいずれかを入力してください")
    docs = db.collection("members").where("uuid", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    if len(data) == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="あなたのIDが見つかりませんでした")
    doc_ref = db.collection("members").document(data[0]["id"])
    result = doc_ref.update({"name": name, "size": size})
    return result


async def remove_member(uuid: str):
    docs = db.collection("members").where("uuid", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    if len(data) == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="あなたのIDが見つかりませんでした")
    result = db.collection("members").document(data[0]["id"]).delete()
    return result


async def remove_familiar_related_member(uuid: str):
    docs = db.collection("familiars").where("start", "==", uuid).stream()
    docs2 = db.collection("familiars").where("end", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    for doc in docs2:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)

    i = 0
    while True:
        if i > len(data) - 1:
            break
        db.collection("familiars").document(data[i]["id"]).delete()
        i += 1
    return True


async def remove_familiar(start: str, end: str):
    docs = db.collection("familiars").where("start", "==", start).where("end", "==", end).stream()
    docs2 = db.collection("familiars").where("start", "==", end).where("end", "==", start).stream()

    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    for doc in docs2:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    if len(data) == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="登録しているIDがありません")
    result = db.collection("familiars").document(data[0]["id"]).delete()
    return result
