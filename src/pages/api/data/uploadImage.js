import { uploadImage } from "@/lib/firestore/dataService/UploadImageService";
import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const formidableConfig = {
  maxFields: 7,
  multiples: false,
  keepExtensions: true,
  allowEmptyFiles: false,
  maxFileSize: 1_000_000, // 1 MB
  maxFieldsSize: 10_000_000, // 10 MB
};

export default async function handlerUploadImage(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const form = new IncomingForm(formidableConfig);

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing files", err);
      return res
        .status(500)
        .json({ error: "Terjadi kesalahan saat mengunggah file" });
    }

    const imageToUpload = files.imageToUpload;
    let docId = fields.docId;

    if (!imageToUpload) {
      console.error("No file uploaded");
      return res.status(400).json({ error: "Tidak ada file yang diunggah" });
    }

    if (Array.isArray(docId)) {
      docId = docId[0];
    }

    const fileObject = Array.isArray(imageToUpload)
      ? imageToUpload[0]
      : imageToUpload;

    try {
      const result = await uploadImage(fileObject, docId);
      res.status(200).json({
        message: "File berhasil diunggah",
        url: result.url,
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah file:", error);
      res.status(500).json({ error: "Terjadi kesalahan saat mengunggah file" });
    }
  });
}
