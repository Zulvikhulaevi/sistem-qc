import { addData } from "@/lib/firestore/dataService/DataService";

export default async function handlerAddData(req, res) {
  if (req.method === "POST") {
    try {
      const {
        partName,
        name,
        nik,
        productionDate,
        productionTime,
        cav1Tms1,
        cav1Tms2,
        cav1Tms3,
        cav1Tms4,
        cav1Tms5,
        cav2Tms1,
        cav2Tms2,
        cav2Tms3,
        cav2Tms4,
        cav2Tms5,
        cav3Tms1,
        cav3Tms2,
        cav3Tms3,
        cav3Tms4,
        cav3Tms5,
        cav4Tms1,
        cav4Tms2,
        cav4Tms3,
        cav4Tms4,
        cav4Tms5,
        cav1Surface,
        cav2Surface,
        cav3Surface,
        cav4Surface,
        cav1Pg1,
        cav2Pg1,
        cav3Pg1,
        cav4Pg1,
        cav1Pg2,
        cav2Pg2,
        cav3Pg2,
        cav4Pg2,
        cav1Db,
        cav2Db,
        cav3Db,
        cav4Db,
      } = req.body;

      if (!partName || !name || !nik || !productionDate || !productionTime) {
        res.status(400).json({ message: "Required fields are missing" });
        return;
      }

      let data;

      if (partName === "Knob Manual L 1 st") {
        data = {
          cav1Db,
          cav2Db,
          cav1Pg1,
          cav2Pg1,
          cav1Tms1,
          cav2Tms1,
          cav1Tms2,
          cav2Tms2,
        };
      } else if (partName === "Straight 3rd") {
        data = {
          cav1Tms1,
          cav1Tms2,
          cav1Tms3,
          cav1Tms4,
          cav1Tms5,
          cav2Tms1,
          cav2Tms2,
          cav2Tms3,
          cav2Tms4,
          cav2Tms5,
          cav3Tms1,
          cav3Tms2,
          cav3Tms3,
          cav3Tms4,
          cav3Tms5,
          cav4Tms1,
          cav4Tms2,
          cav4Tms3,
          cav4Tms4,
          cav4Tms5,
          cav1Surface,
          cav2Surface,
          cav3Surface,
          cav4Surface,
          cav1Pg1,
          cav2Pg1,
          cav3Pg1,
          cav4Pg1,
          cav1Pg2,
          cav2Pg2,
          cav3Pg2,
          cav4Pg2,
          cav1Db,
          cav2Db,
          cav3Db,
          cav4Db,
        };
      } else {
        console.log("Invalid partName:", partName);
        res.status(400).json({ message: "Invalid partName" });
        return;
      }

      const docRef = await addData(
        partName,
        name,
        nik,
        productionDate,
        productionTime,
        data
      );
      const docId = docRef.id;
      res.status(200).json({ docId });
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
      res.status(500).json({ message: "Failed to add data to Firestore" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
