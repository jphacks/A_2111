from fastapi import HTTPException, status
import os
from uuid import uuid4
# from firebase import bucket
from firebase import db
from firebase_admin import firestore


tmp_dir_name = "/tmp" if os.environ.get("DYNO") else "./tmp"

# DBの構造が分からないな


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
    print(docs)
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    print(data)
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


# ユーザー新規登録


async def create_member(name: str) -> str:
    uuid = str(uuid4())
    doc_ref = db.collection('members').document()
    doc_ref.set({
        'uuid': uuid,
        'name': name
    })
    return uuid


async def create_familiar(start: str, end: str):
    doc_ref = db.collection('familiars').document()
    doc_ref.set({
        "start": start,
        "end": end
    })
    return True


async def update_member(uuid: str, name: str):
    print(1)
    member_ref = db.collection("members").document(id)
    print(2)
    member_ref.update({"name": name}, merge=True)  # ここに問題あり
    print(3)
    return


async def remove_member(uuid: str):
    docs = db.collection("members").where("uuid", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    result = db.collection("members").document(data[0]['id']).delete()
    return result


async def remove_familiar(uuid: str):
    docs = db.collection("familiars").where("start", "==", uuid).stream()
    docs2 = db.collection("familiars").where("end", "==", uuid).stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    for doc in docs2:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    print(data)
    result = db.collection('familiars').document(data[0]['id']).delete()
    return result
