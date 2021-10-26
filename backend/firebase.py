import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
from firebase_admin import firestore

cred_file_path = ""

tmp_cred_file_path = "/tmp/cred.json"

is_local = os.path.exists("cert.json")

if is_local:
    cred_file_path = "cert.json"
else:
    json = os.environ.get("cert_json")
    with open(tmp_cred_file_path, mode='w') as f:
        f.write(json)
    cred_file_path = tmp_cred_file_path

from google.oauth2 import service_account

vision_api_cred = service_account.Credentials.from_service_account_file(cred_file_path)


cred = credentials.Certificate(cred_file_path)

if not is_local:
    os.remove(tmp_cred_file_path)

firebase_app = firebase_admin.initialize_app(cred, {
    'storageBucket': 'garigari-stagram.appspot.com',
    'projectId': 'garigari-stagram',
})

bucket = storage.bucket()

db = firestore.client()
