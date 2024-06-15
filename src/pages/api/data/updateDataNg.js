import { updateDataNg } from "@/lib/firestore/dataService/DataService";

export default async function handlerUpdateDataNg(req, res) {
  if (req.method === "PATCH") {
    try {
      const { docId, date, partNgName, partNgCode, customer, jenisNg } =
        req.body;

      await updateDataNg(
        docId,
        date,
        partNgName,
        partNgCode,
        customer,
        jenisNg
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
