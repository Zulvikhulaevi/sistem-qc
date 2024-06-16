import { getAllDataNg } from "@/lib/firestore/dataService/DataService";

export default async function handlerGetAllDataNg(req, res) {
  if (req.method === "GET") {
    try {
      const data = await getAllDataNg();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ message: "Bad request" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
