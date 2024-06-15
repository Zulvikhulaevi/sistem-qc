import fs from "fs";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import {
  collection,
  addDoc,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";
import app from "../init";

const firestore = getFirestore(app);
const storage = getStorage(app);

export async function uploadImage(fileObject) {
  const fileName =
    fileObject.originalFilename || fileObject.newFilename || fileObject.name;
  const storageRef = ref(storage, `Image/${fileName}`);
  const fileBuffer = fs.readFileSync(fileObject.filepath);
  await uploadBytes(storageRef, fileBuffer);
  const downloadURL = await getDownloadURL(storageRef);

  await addDoc(collection(firestore, "imageUploaded"), {
    name: fileName,
    url: downloadURL,
    uploadedAt: serverTimestamp(),
  });

  return { url: downloadURL };
}
