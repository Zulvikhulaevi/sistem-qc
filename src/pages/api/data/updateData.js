import { updateData } from "@/lib/firestore/dataService/DataService";

export default async function handlerUpdateData(req, res) {
  if (req.method === "PATCH") {
    try {
      const {
        docId,
        partName,
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

      let data;
      if (partName === "Knob Manual L 1 st") {
        data = {
          docId,
          partName,
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
          docId,
          partName,
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
        console.log("API : Invalid partName Value");
      }

      if (data) {
        await updateData(data);
        res.status(200).json({
          message: "Form data updated in Firestore successfully",
        });
      } else {
        console.log("API: Data not found");
      }
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
