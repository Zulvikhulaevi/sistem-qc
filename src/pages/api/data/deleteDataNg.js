import { deleteDataNg } from "@/lib/firestore/dataService/DataService";

export default async function handlerDeleteDataNg(req, res) {
  if (req.method === "DELETE") {
    try {
      const { docId } = req.query;

      const data = await deleteDataNg(docId);
      res.status(200).json(data);
    } catch (error) {
      console.error("Error deleting Suggestion data:", error);
      res.status(500).json({ message: "Failed to delete Suggestion data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
