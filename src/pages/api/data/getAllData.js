import { getAllData } from "@/lib/firestore/dataService/DataService";

export default async function handlerGetAllData(req, res) {
  if (req.method === "GET") {
    try {
      const { partName } = req.query;
      const data = await getAllData(partName);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ message: "Bad request" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
