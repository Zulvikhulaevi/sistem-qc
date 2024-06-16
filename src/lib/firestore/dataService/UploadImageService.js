import fs from "fs";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
import {
  serverTimestamp,
  getFirestore,
  updateDoc,
  doc,
  collection,
  addDoc,
} from "firebase/firestore";
import app from "../init";

const firestore = getFirestore(app);
const storage = getStorage(app);

export async function uploadImage(fileObject, docId) {
  try {
    const fileName =
      fileObject.originalFilename || fileObject.newFilename || fileObject.name;
    const storageRef = ref(storage, `NG_Image/${fileName}`);
    const fileBuffer = fs.readFileSync(fileObject.filepath);
    await uploadBytes(storageRef, fileBuffer);
    const downloadURL = await getDownloadURL(storageRef);

    await updateDoc(doc(firestore, "PPQS", docId), {
      imageData: {
        name: fileName,
        url: downloadURL,
        uploadedAt: serverTimestamp(),
      },
    });

    return { url: downloadURL };
  } catch (error) {
    console.error("Error uploading image to Firestore:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
}

export async function deleteImage(filePath) {
  const fileRef = ref(storage, filePath);

  try {
    await deleteObject(fileRef);
  } catch (error) {
    console.error(`Error deleting file at ${filePath}:`, error);
    throw error;
  }
}
