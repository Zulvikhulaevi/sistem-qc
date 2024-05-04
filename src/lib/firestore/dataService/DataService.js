import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import app from "../init";

const firestore = getFirestore(app);

export async function addData(
  partName,
  name,
  nik,
  productionDate,
  productionTime,
  data
) {
  try {
    let measurementData;
    if (partName === "Knob Manual L 1 st") {
      measurementData = {
        pointPg: data.pointPg,
        pointTms1: data.pointTms1,
        pointTms2: data.pointTms2,
        partName: partName,
        cav1: {
          pg: data.cav1pg,
          tms1: data.cav1Tms1,
          tms2: data.cav1Tms2,
        },
        cav2: {
          pg: data.cav2pg,
          tms1: data.cav2Tms1,
          tms2: data.cav2Tms2,
        },
      };
    } else {
      throw new Error("Invalid Part Name");
    }

    const docRef = collection(firestore, "QcData");
    const snapshot = await addDoc(docRef, {
      name: name,
      nik: nik,
      productionDate: productionDate,
      productionTime: productionTime,
      date: serverTimestamp(),
      result: measurementData,
    });
    return snapshot;
  } catch (error) {
    console.error("Error adding document to Firestore:", error);
    throw new Error("Failed to add document to Firestore");
  }
}

export async function updateData(
  docId,
  partName,
  name,
  nik,
  productionDate,
  productionTime,
  pointPg,
  pointTms1,
  pointTms2,
  cav1pg,
  cav2pg,
  cav1Tms1,
  cav2Tms1,
  cav1Tms2,
  cav2Tms2
) {
  try {
    const docRef = doc(firestore, "QcData", docId);
    const snapshot = await updateDoc(docRef, {
      name: name,
      nik: nik,
      productionDate: productionDate,
      productionTime: productionTime,
      result: {
        pointPg: pointPg,
        pointTms1: pointTms1,
        pointTms2: pointTms2,
        cav1: {
          pg: cav1pg,
          tms1: cav1Tms1,
          tms2: cav1Tms2,
        },
        cav2: {
          pg: cav2pg,
          tms1: cav2Tms1,
          tms2: cav2Tms2,
        },
      },
    });
    return snapshot;
  } catch (error) {
    console.error("Error updating document:", error);
    throw new Error("Failed to add document subcollection to Firestore");
  }
}

export async function deleteData(docId) {
  try {
    const docRef = doc(firestore, "QcData", docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting data:", error);
    throw new Error("Failed to delete data");
  }
}

export async function getDataById(docId) {
  try {
    const docRef = doc(firestore, "QcData", docId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error("document does not exist");
    }
  } catch (error) {
    console.error("Error fetching document ID:", error);
    throw new Error("Failed to fetch document ID from Firestore");
  }
}

export async function getAllData() {
  try {
    const docRef = collection(firestore, "QcData");
    const snapshot = await getDocs(docRef);

    const subData = [];
    snapshot.forEach((doc) => {
      subData.push({ id: doc.id, ...doc.data() });
    });
    return subData;
  } catch (error) {
    console.error("Error fetching document data:", error);
    throw new Error("Failed to fetch document data from Firestore");
  }
}
