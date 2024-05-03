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
        pointPg,
        pointTms1,
        pointTms2,
        cav1pg,
        cav1Tms1,
        cav1Tms2,
        cav2pg,
        cav2Tms1,
        cav2Tms2,
      } = req.body;

      if (!partName || !name || !nik || !productionDate || !productionTime) {
        res.status(400).json({ message: "Required fields are missing" });
        return;
      }

      let data;

      if (partName === "Knob Manual L 1 st") {
        data = {
          pointPg,
          pointTms1,
          pointTms2,
          cav1pg,
          cav1Tms1,
          cav1Tms2,
          cav2pg,
          cav2Tms1,
          cav2Tms2,
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
