import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
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
        partName: partName,
        cav1: {
          pg: data.cav1Pg1,
          tms1: data.cav1Tms1,
          tms2: data.cav1Tms2,
          db: data.cav1Db,
        },
        cav2: {
          pg: data.cav2Pg1,
          tms1: data.cav2Tms1,
          tms2: data.cav2Tms2,
          db: data.cav2Db,
        },
      };
    } else if (partName === "Straight 3rd") {
      measurementData = {
        partName: partName,
        cav1: {
          tms1: data.cav1Tms1,
          tms2: data.cav1Tms2,
          tms3: data.cav1Tms3,
          tms4: data.cav1Tms4,
          surface: data.cav1Surface,
          pg1: data.cav1Pg1,
          pg2: data.cav1Pg2,
          tms5: data.cav1Tms5,
          db: data.cav1Db,
        },
        cav2: {
          tms1: data.cav2Tms1,
          tms2: data.cav2Tms2,
          tms3: data.cav2Tms3,
          tms4: data.cav2Tms4,
          surface: data.cav2Surface,
          pg1: data.cav2Pg1,
          pg2: data.cav2Pg2,
          tms5: data.cav2Tms5,
          db: data.cav2Db,
        },
        cav3: {
          tms1: data.cav3Tms1,
          tms2: data.cav3Tms2,
          tms3: data.cav3Tms3,
          tms4: data.cav3Tms4,
          surface: data.cav3Surface,
          pg1: data.cav3Pg1,
          pg2: data.cav3Pg2,
          tms5: data.cav3Tms5,
          db: data.cav3Db,
        },
        cav4: {
          tms1: data.cav4Tms1,
          tms2: data.cav4Tms2,
          tms3: data.cav4Tms3,
          tms4: data.cav4Tms4,
          surface: data.cav4Surface,
          pg1: data.cav4Pg1,
          pg2: data.cav4Pg2,
          tms5: data.cav4Tms5,
          db: data.cav4Db,
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
  name,
  nik,
  productionDate,
  productionTime,
  cav1Db,
  cav2Db,
  cav1Pg1,
  cav2Pg1,
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
        cav1: {
          pg: cav1Pg1,
          tms1: cav1Tms1,
          tms2: cav1Tms2,
          db: cav1Db,
        },
        cav2: {
          pg: cav2Pg1,
          tms1: cav2Tms1,
          tms2: cav2Tms2,
          db: cav2Db,
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

export async function getAllData(partName) {
  try {
    const docRef = collection(firestore, "QcData");
    const q = query(docRef, where("result.partName", "==", partName));
    const snapshot = await getDocs(q);

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
