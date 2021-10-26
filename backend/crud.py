from fastapi import HTTPException, status
import os
from uuid import uuid4
# from firebase import bucket
from firebase import db
from firebase_admin import firestore

from main import get_members


tmp_dir_name = "/tmp" if os.environ.get("DYNO") else "./tmp"

# DBの構造が分からないな
async def get_all_members():
    # なんでuuidが薄い？
    uuid = str(uuid4())
    docs = db.collection("members").stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    return data


async def get_all_familiars():
    uuid = str(uuid4())
    docs = db.collection("members").stream()
    data = []
    for doc in docs:
        post = {"id": doc.id, **doc.to_dict()}
        data.append(post)
    return data


async def create_member_post(name: str):
    # docs = db.collection("members").where("lat", "==", True).stream()
    # async for doc in docs:
    #     print(f"{doc.id} => {doc.to_dict()}")
    doc_ref = db.collection('posts').document()
    doc_ref.set({
        'name': name
    })
    return True


async def create_familiar_post(name: str):
    doc_ref = db.collection('posts').document()
    doc_ref.set({
        'name': name
    })
    return True


async def update_member():
    return


# Sessionってなんだろう。明日考える
# async def remove_member(member_id: str, 
# db: Session = Depends(get_db)
# ):
#     member = get_members(db, member_id)
#     db.delete(member)
#     db.commit()


# async def remove_familiar(familiar_id: str,
#  ):
#     familiar = get_familiars(db, familiar_id)
#     db.delete()
#     db.commit()


