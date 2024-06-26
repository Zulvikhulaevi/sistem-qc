import { addDataNg } from "@/lib/firestore/dataService/DataService";

export default async function handlerAddDataNg(req, res) {
  if (req.method === "POST") {
    try {
      const { name, nik, date, partNgName, partNgCode, customer, jenisNg } =
        req.body;
      const docRef = await addDataNg(
        name,
        nik,
        date,
        partNgName,
        partNgCode,
        customer,
        jenisNg
      );
      const docId = docRef.id;
      res.status(200).json({ message: "Suggestion added successfully", docId });
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
      res.status(500).json({ message: "Failed to add data to Firestore" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
