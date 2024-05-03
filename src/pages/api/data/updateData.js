import { updateData } from "@/lib/firestore/dataService/DataService";

export default async function handlerUpdateData(req, res) {
  if (req.method === "PATCH") {
    try {
      const {
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
        cav2Tms2,
      } = req.body;

      await updateData(
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
      );

      res.status(200).json({
        message: "Form data updated in Firestore successfully",
      });
    } catch (error) {
      console.error("Error updating form data in Firestore:", error);
      res
        .status(500)
        .json({ message: "Failed to update form data in Firestore" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
