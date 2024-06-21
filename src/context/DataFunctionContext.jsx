import axios from "axios";
import React, { createContext, useContext } from "react";
import { useAllStateContext } from "./AllStateContext";
import { useSession } from "next-auth/react";
import jsPDF from "jspdf";
import { format } from "date-fns";

const DataFunctionContext = createContext();

const MAX_FILE_SIZE_MB = 1;

export const DataFunctionContextProvider = ({ children }) => {
  const { data: session } = useSession();
  const {
    setIsBtnAddLoading,
    setIsModalDetailOpen,
    setIsModalDeleteOpen,
    setIsModalDetailNgOpen,
    docId,
    setDocId,
    partName,
    setIsError,
    setIsValueError,
    productionDate,
    productionTime,
    setIsTab1Active,
    setIsTab2Active,
    setIsTab3Active,
    setIsTab4Active,
    setIsTab1ModalActive,
    setIsTab2ModalActive,
    setIsTab3ModalActive,
    setIsTab4ModalActive,
    cav1Surface,
    cav2Surface,
    cav3Surface,
    cav4Surface,
    cav1Db,
    cav2Db,
    cav3Db,
    cav4Db,
    cav1Pg1,
    cav2Pg1,
    cav3Pg1,
    cav4Pg1,
    cav1Pg2,
    cav2Pg2,
    cav3Pg2,
    cav4Pg2,
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
    setAllData,
    cav1Tms1Edit,
    cav1Tms2Edit,
    cav1Tms3Edit,
    cav1Tms4Edit,
    cav1Tms5Edit,
    cav2Tms1Edit,
    cav2Tms2Edit,
    cav2Tms3Edit,
    cav2Tms4Edit,
    cav2Tms5Edit,
    cav3Tms1Edit,
    cav3Tms2Edit,
    cav3Tms3Edit,
    cav3Tms4Edit,
    cav3Tms5Edit,
    cav4Tms1Edit,
    cav4Tms2Edit,
    cav4Tms3Edit,
    cav4Tms4Edit,
    cav4Tms5Edit,
    cav1SurfaceEdit,
    cav2SurfaceEdit,
    cav3SurfaceEdit,
    cav4SurfaceEdit,
    cav1Pg1Edit,
    cav1Pg2Edit,
    cav2Pg1Edit,
    cav2Pg2Edit,
    cav3Pg1Edit,
    cav3Pg2Edit,
    cav4Pg1Edit,
    cav4Pg2Edit,
    cav1DbEdit,
    cav2DbEdit,
    cav3DbEdit,
    cav4DbEdit,
    setCav1Tms1Edit,
    setCav1Tms2Edit,
    setCav1Tms3Edit,
    setCav1Tms4Edit,
    setCav1Tms5Edit,
    setCav2Tms1Edit,
    setCav2Tms2Edit,
    setCav2Tms3Edit,
    setCav2Tms4Edit,
    setCav2Tms5Edit,
    setCav3Tms1Edit,
    setCav3Tms2Edit,
    setCav3Tms3Edit,
    setCav3Tms4Edit,
    setCav3Tms5Edit,
    setCav4Tms1Edit,
    setCav4Tms2Edit,
    setCav4Tms3Edit,
    setCav4Tms4Edit,
    setCav4Tms5Edit,
    setCav1SurfaceEdit,
    setCav2SurfaceEdit,
    setCav3SurfaceEdit,
    setCav4SurfaceEdit,
    setCav1Pg1Edit,
    setCav2Pg1Edit,
    setCav3Pg1Edit,
    setCav4Pg1Edit,
    setCav1Pg2Edit,
    setCav2Pg2Edit,
    setCav3Pg2Edit,
    setCav4Pg2Edit,
    setCav1DbEdit,
    setCav2DbEdit,
    setCav3DbEdit,
    setCav4DbEdit,
    partNgName,
    partNgCode,
    customer,
    jenisNg,
    dateForNg,
    setIsModalAddNgOpen,
    setAllDataNg,
    setJenisNg,
    setCustomer,
    setPartNgName,
    setPartNgCode,
    setDateForNg,
    image,
    setImage,
    setImageUrl,
    imageName,
    setImageName,
    isImageSizeError,
    setIsImageSizeError,
  } = useAllStateContext();

  const KnobManL1st = {
    partName: partName,
    name: session?.user.nama,
    nik: session?.user.nik,
    productionDate: productionDate,
    productionTime: productionTime,
    cav1Db: cav1Db,
    cav2Db: cav2Db,
    cav1Pg1: cav1Pg1,
    cav2Pg1: cav2Pg1,
    cav1Tms1: cav1Tms1,
    cav2Tms1: cav2Tms1,
    cav1Tms2: cav1Tms2,
    cav2Tms2: cav2Tms2,
  };

  const KnobManL1stEdit = {
    docId: docId,
    partName: partName,
    cav1Pg1: cav1Pg1Edit,
    cav2Pg1: cav2Pg1Edit,
    cav1Tms1: cav1Tms1Edit,
    cav1Tms2: cav1Tms2Edit,
    cav2Tms1: cav2Tms1Edit,
    cav2Tms2: cav2Tms2Edit,
    cav1Db: cav1DbEdit,
    cav2Db: cav2DbEdit,
  };

  const Straight3Rd = {
    partName: partName,
    name: session?.user.nama,
    nik: session?.user.nik,
    productionDate: productionDate,
    productionTime: productionTime,
    cav1Tms1: cav1Tms1,
    cav1Tms2: cav1Tms2,
    cav1Tms3: cav1Tms3,
    cav1Tms4: cav1Tms4,
    cav1Tms5: cav1Tms5,
    cav2Tms1: cav2Tms1,
    cav2Tms2: cav2Tms2,
    cav2Tms3: cav2Tms3,
    cav2Tms4: cav2Tms4,
    cav2Tms5: cav2Tms5,
    cav3Tms1: cav3Tms1,
    cav3Tms2: cav3Tms2,
    cav3Tms3: cav3Tms3,
    cav3Tms4: cav3Tms4,
    cav3Tms5: cav3Tms5,
    cav4Tms1: cav4Tms1,
    cav4Tms2: cav4Tms2,
    cav4Tms3: cav4Tms3,
    cav4Tms4: cav4Tms4,
    cav4Tms5: cav4Tms5,
    cav1Surface: cav1Surface,
    cav2Surface: cav2Surface,
    cav3Surface: cav3Surface,
    cav4Surface: cav4Surface,
    cav1Pg1: cav1Pg1,
    cav2Pg1: cav2Pg1,
    cav3Pg1: cav3Pg1,
    cav4Pg1: cav4Pg1,
    cav1Pg2: cav1Pg2,
    cav2Pg2: cav2Pg2,
    cav3Pg2: cav3Pg2,
    cav4Pg2: cav4Pg2,
    cav1Db: cav1Db,
    cav2Db: cav2Db,
    cav3Db: cav3Db,
    cav4Db: cav4Db,
  };

  const Straight3RdEdit = {
    docId: docId,
    partName: partName,
    cav1Tms1: cav1Tms1Edit,
    cav1Tms2: cav1Tms2Edit,
    cav1Tms3: cav1Tms3Edit,
    cav1Tms4: cav1Tms4Edit,
    cav1Tms5: cav1Tms5Edit,
    cav2Tms1: cav2Tms1Edit,
    cav2Tms2: cav2Tms2Edit,
    cav2Tms3: cav2Tms3Edit,
    cav2Tms4: cav2Tms4Edit,
    cav2Tms5: cav2Tms5Edit,
    cav3Tms1: cav3Tms1Edit,
    cav3Tms2: cav3Tms2Edit,
    cav3Tms3: cav3Tms3Edit,
    cav3Tms4: cav3Tms4Edit,
    cav3Tms5: cav3Tms5Edit,
    cav4Tms1: cav4Tms1Edit,
    cav4Tms2: cav4Tms2Edit,
    cav4Tms3: cav4Tms3Edit,
    cav4Tms4: cav4Tms4Edit,
    cav4Tms5: cav4Tms5Edit,
    cav1Surface: cav1SurfaceEdit,
    cav2Surface: cav2SurfaceEdit,
    cav3Surface: cav3SurfaceEdit,
    cav4Surface: cav4SurfaceEdit,
    cav1Pg1: cav1Pg1Edit,
    cav2Pg1: cav2Pg1Edit,
    cav3Pg1: cav3Pg1Edit,
    cav4Pg1: cav4Pg1Edit,
    cav1Pg2: cav1Pg2Edit,
    cav2Pg2: cav2Pg2Edit,
    cav3Pg2: cav3Pg2Edit,
    cav4Pg2: cav4Pg2Edit,
    cav1Db: cav1DbEdit,
    cav2Db: cav2DbEdit,
    cav3Db: cav3DbEdit,
    cav4Db: cav4DbEdit,
  };

  const switchTab1 = () => {
    setIsTab1Active(true);
    setIsTab2Active(false);
    setIsTab3Active(false);
    setIsTab4Active(false);
  };

  const switchTab2 = () => {
    setIsTab2Active(true);
    setIsTab1Active(false);
    setIsTab3Active(false);
    setIsTab4Active(false);
  };

  const switchTab3 = () => {
    setIsTab3Active(true);
    setIsTab1Active(false);
    setIsTab2Active(false);
    setIsTab4Active(false);
  };

  const switchTab4 = () => {
    setIsTab4Active(true);
    setIsTab1Active(false);
    setIsTab2Active(false);
    setIsTab3Active(false);
  };

  const switchTabModal1 = () => {
    setIsTab1ModalActive(true);
    setIsTab2ModalActive(false);
    setIsTab3ModalActive(false);
    setIsTab4ModalActive(false);
  };

  const switchTabModal2 = () => {
    setIsTab2ModalActive(true);
    setIsTab1ModalActive(false);
    setIsTab3ModalActive(false);
    setIsTab4ModalActive(false);
  };

  const switchTabModal3 = () => {
    setIsTab3ModalActive(true);
    setIsTab1ModalActive(false);
    setIsTab2ModalActive(false);
    setIsTab4ModalActive(false);
  };

  const switchTabModal4 = () => {
    setIsTab4ModalActive(true);
    setIsTab1ModalActive(false);
    setIsTab2ModalActive(false);
    setIsTab3ModalActive(false);
  };

  const addData = async () => {
    let data;
    if (partName === "Knob Manual L 1 st" && productionDate && productionTime) {
      if (
        cav1Pg1 >= 3.05 &&
        cav1Pg1 <= 3.11 &&
        cav1Tms1 >= 3.75 &&
        cav1Tms1 <= 3.85 &&
        cav2Tms1 >= 3.75 &&
        cav2Tms1 <= 3.85 &&
        cav1Tms2 >= 17.1 &&
        cav1Tms2 <= 17.2 &&
        cav2Tms2 >= 17.1 &&
        cav2Tms2 <= 17.2 &&
        cav1Db >= 16.81 &&
        cav1Db <= 17.51 &&
        cav2Db >= 16.81 &&
        cav2Db <= 17.51
      ) {
        data = KnobManL1st;
      } else {
        setIsValueError(true);
      }
    } else if (
      partName === "Straight 3rd" &&
      productionDate &&
      productionTime
    ) {
      if (
        cav1Tms1 >= 10.4 &&
        cav1Tms1 <= 10.6 &&
        cav1Tms2 >= 10.4 &&
        cav1Tms2 <= 10.6 &&
        cav1Tms3 >= 4.9 &&
        cav1Tms3 <= 5.1 &&
        cav1Tms4 >= 3.45 &&
        cav1Tms4 <= 3.55 &&
        cav1Tms5 >= 0 &&
        cav1Tms5 <= 0.2 &&
        cav2Tms1 >= 10.4 &&
        cav2Tms1 <= 10.6 &&
        cav2Tms2 >= 10.4 &&
        cav2Tms2 <= 10.6 &&
        cav2Tms3 >= 4.9 &&
        cav2Tms3 <= 5.1 &&
        cav2Tms4 >= 3.45 &&
        cav2Tms4 <= 3.55 &&
        cav2Tms5 >= 0 &&
        cav2Tms5 <= 0.2 &&
        cav3Tms1 >= 10.4 &&
        cav3Tms1 <= 10.6 &&
        cav3Tms2 >= 10.4 &&
        cav3Tms2 <= 10.6 &&
        cav3Tms3 >= 4.9 &&
        cav3Tms3 <= 5.1 &&
        cav3Tms4 >= 3.45 &&
        cav3Tms4 <= 3.55 &&
        cav3Tms5 >= 0 &&
        cav3Tms5 <= 0.2 &&
        cav4Tms1 >= 10.4 &&
        cav4Tms1 <= 10.6 &&
        cav4Tms2 >= 10.4 &&
        cav4Tms2 <= 10.6 &&
        cav4Tms3 >= 4.9 &&
        cav4Tms3 <= 5.1 &&
        cav4Tms4 >= 3.45 &&
        cav4Tms4 <= 3.55 &&
        cav4Tms5 >= 0 &&
        cav4Tms5 <= 0.2 &&
        cav1Surface == 6.3 &&
        cav2Surface == 6.3 &&
        cav3Surface == 6.3 &&
        cav4Surface == 6.3 &&
        cav1Pg1 >= 6.4 &&
        cav1Pg1 <= 6.5 &&
        cav2Pg1 >= 6.4 &&
        cav2Pg1 <= 6.5 &&
        cav3Pg1 >= 6.4 &&
        cav3Pg1 <= 6.5 &&
        cav4Pg1 >= 6.4 &&
        cav4Pg1 <= 6.5 &&
        cav1Pg2 >= 8.85 &&
        cav1Pg2 <= 8.95 &&
        cav2Pg2 >= 8.85 &&
        cav2Pg2 <= 8.95 &&
        cav3Pg2 >= 8.85 &&
        cav3Pg2 <= 8.95 &&
        cav4Pg2 >= 8.85 &&
        cav4Pg2 <= 8.95 &&
        cav1Db >= 6.536 &&
        cav1Db <= 7.224 &&
        cav2Db >= 6.536 &&
        cav2Db <= 7.224 &&
        cav3Db >= 6.536 &&
        cav3Db <= 7.224 &&
        cav4Db >= 6.536 &&
        cav4Db <= 7.224
      ) {
        data = Straight3Rd;
      } else {
        setIsValueError(true);
      }
    } else {
      setIsError(true);
    }

    if (data) {
      try {
        setIsBtnAddLoading(true);
        const response = await axios.post("/api/data/addData", data);
        const { docId } = response.data;
        setDocId(docId);
        setIsValueError(false);
        setIsError(false);
        await getAllData();
        setIsBtnAddLoading(false);
      } catch (error) {
        setIsBtnAddLoading(false);
        console.log(error);
      }
    } else {
      console.log("Failed to hit API!");
    }
  };

  const updateData = async () => {
    try {
      let data;
      if (partName === "Knob Manual L 1 st") {
        data = KnobManL1stEdit;
      } else if (partName === "Straight 3rd") {
        data = Straight3RdEdit;
      } else {
        console.log("Invalid Value of partName");
      }

      if (data) {
        await axios.patch("/api/data/updateData", data);
        await getAllData();
        setIsModalDetailOpen(false);
      } else {
        console.log("Data not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      await axios.delete(`/api/data/deleteData?docId=${docId}`);
      await getAllData();
      setIsModalDeleteOpen(false);
      setIsModalDetailOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async (itemId) => {
    try {
      const response = await axios.get(`/api/data/getDataById?docId=${itemId}`);
      if (partName === "Knob Manual L 1 st") {
        setDocId(response.data.id);
        setCav1Pg1Edit(response.data.result.cav1.pg1);
        setCav2Pg1Edit(response.data.result.cav2.pg1);
        setCav1Tms1Edit(response.data.result.cav1.tms1);
        setCav2Tms1Edit(response.data.result.cav2.tms1);
        setCav1Tms2Edit(response.data.result.cav1.tms2);
        setCav2Tms2Edit(response.data.result.cav2.tms2);
        setCav1DbEdit(response.data.result.cav1.db);
        setCav2DbEdit(response.data.result.cav2.db);
        setIsModalDetailOpen(true);
      } else if (partName === "Straight 3rd") {
        setDocId(response.data.id);
        setCav1Pg1Edit(response.data.result.cav1.pg1);
        setCav2Pg1Edit(response.data.result.cav2.pg1);
        setCav3Pg1Edit(response.data.result.cav3.pg1);
        setCav4Pg1Edit(response.data.result.cav4.pg1);
        setCav1Pg2Edit(response.data.result.cav1.pg2);
        setCav2Pg2Edit(response.data.result.cav2.pg2);
        setCav3Pg2Edit(response.data.result.cav3.pg2);
        setCav4Pg2Edit(response.data.result.cav4.pg2);
        setCav1Tms1Edit(response.data.result.cav1.tms1);
        setCav2Tms1Edit(response.data.result.cav2.tms1);
        setCav3Tms1Edit(response.data.result.cav3.tms1);
        setCav4Tms1Edit(response.data.result.cav4.tms1);
        setCav1Tms2Edit(response.data.result.cav1.tms2);
        setCav2Tms2Edit(response.data.result.cav2.tms2);
        setCav3Tms2Edit(response.data.result.cav3.tms2);
        setCav4Tms2Edit(response.data.result.cav4.tms2);
        setCav1Tms3Edit(response.data.result.cav1.tms3);
        setCav2Tms3Edit(response.data.result.cav2.tms3);
        setCav3Tms3Edit(response.data.result.cav3.tms3);
        setCav4Tms3Edit(response.data.result.cav4.tms3);
        setCav1Tms4Edit(response.data.result.cav1.tms4);
        setCav2Tms4Edit(response.data.result.cav2.tms4);
        setCav3Tms4Edit(response.data.result.cav3.tms4);
        setCav4Tms4Edit(response.data.result.cav4.tms4);
        setCav1Tms5Edit(response.data.result.cav1.tms5);
        setCav2Tms5Edit(response.data.result.cav2.tms5);
        setCav3Tms5Edit(response.data.result.cav3.tms5);
        setCav4Tms5Edit(response.data.result.cav4.tms5);
        setCav1SurfaceEdit(response.data.result.cav1.surfaceTest);
        setCav2SurfaceEdit(response.data.result.cav2.surfaceTest);
        setCav3SurfaceEdit(response.data.result.cav3.surfaceTest);
        setCav4SurfaceEdit(response.data.result.cav4.surfaceTest);
        setCav1DbEdit(response.data.result.cav1.db);
        setCav2DbEdit(response.data.result.cav2.db);
        setCav3DbEdit(response.data.result.cav3.db);
        setCav4DbEdit(response.data.result.cav4.db);
        setIsModalDetailOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllData = async () => {
    try {
      const response = await axios.get(
        `/api/data/getAllData?partName=${partName}`
      );
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addDataNg = async (e) => {
    e.preventDefault();
    try {
      if (!isImageSizeError) {
        const response = await axios.post("/api/data/addDataNg", {
          name: session?.user.nama,
          nik: session?.user.nik,
          date: dateForNg,
          partNgName: partNgName,
          partNgCode: partNgCode,
          customer: customer,
          jenisNg: jenisNg,
        });
        const { docId } = response.data;
        setDocId(docId);

        try {
          if (image !== null) {
            const formData = new FormData();

            formData.append("docId", docId);
            formData.append("imageToUpload", image);

            const response = await axios.post(
              "/api/data/uploadImage",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            const { url } = response.data;
            setImageUrl(url);
          } else {
            console.log("Upload Failed!");
          }
        } catch (error) {
          console.log(error);
        }
        await getAllDataNg();
        setIsModalAddNgOpen(false);
      } else {
        setImage([null]);
      }
    } catch (error) {
      setIsModalAddNgOpen(false);
      console.log(error);
    }
  };

  const getAllDataNg = async () => {
    try {
      const response = await axios.get(`/api/data/getAllDataNg`);
      setAllDataNg(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataNgById = async (itemId) => {
    setDocId(itemId);
    try {
      const response = await axios.get(
        `/api/data/getDataNgById?docId=${itemId}`
      );
      setPartNgName(response.data.namaPart),
        setPartNgCode(response.data.kodePart),
        setCustomer(response.data.customer),
        setJenisNg(response.data.jenisNG),
        setDateForNg(response.data.date),
        setImageName(response.data.imageData.name),
        setImageUrl(response.data.imageData.url);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDataNg = async () => {
    try {
      await axios.patch("/api/data/updateDataNg", {
        docId: docId,
        date: dateForNg,
        partNgName: partNgName,
        partNgCode: partNgCode,
        customer: customer,
        jenisNg: jenisNg,
      });
      await getAllDataNg();
      setIsModalDetailNgOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDataNg = async () => {
    try {
      await axios.delete(`/api/data/deleteDataNg?docId=${docId}`);
      await deleteImage(`NG_Image/${imageName}`);
      await getAllDataNg();
      setIsModalDeleteOpen(false);
      setIsModalDetailNgOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImage = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
      setIsImageSizeError(true);
    } else {
      setIsImageSizeError(false);
      setImage(selectedFile);
    }
  };

  const deleteImage = async (filePath) => {
    try {
      const response = await axios.delete("/api/data/deleteImage", {
        data: { filePath },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const exportToPdf = async (itemId) => {
    try {
      const response = await axios.get(
        `/api/data/getDataNgById?docId=${itemId}`
      );

      const doc = new jsPDF();

      const addHeader = () => {
        const img = new Image();
        const logoUrl = "/static/assets/logo.jpg";
        img.src = logoUrl;

        img.onload = () => {
          doc.addImage(img, "jpg", 10, 1, 98, 25);
          doc.setFontSize(11);
          doc.text("Kawasan EJIP Plot. 8C No. A4-A5", 13, 26);
          doc.text(
            "Jalan Ciujung, Sukaresmi, Cikarang Selatan, Sukaresmi",
            13,
            32
          );
          doc.text("Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17550", 13, 38);
          doc.setLineWidth(0.3);
          doc.line(13, 41, 204, 41);

          addContent();
        };
      };

      const addContent = () => {
        const getCurrentDate = () => {
          const today = new Date();
          const day = String(today.getDate()).padStart(2, "0");
          const month = String(today.getMonth() + 1).padStart(2, "0");
          const year = today.getFullYear();

          return `${day}/${month}/${year}`;
        };

        const currentDate = getCurrentDate();

        doc.setFontSize(12);
        const headerText = "PART ABNORMALITY PROCEDURE QUALITY SYSTEM (PPQS)";
        const startX = 46;
        const startY = 52;
        doc.text(headerText, startX, startY);

        const textWidth = doc.getTextWidth(headerText);
        doc.line(startX, startY + 2, startX + textWidth, startY + 2);

        doc.text("Date", 14, 66);
        doc.text(
          `: ${format(new Date(response.data.date), "dd/MM/yyyy")}`,
          40,
          66
        );
        doc.text("Part Name", 14, 74);
        doc.text(`: ${response.data.namaPart}`, 40, 74);
        doc.text("Part No.", 14, 82);
        doc.text(`: ${response.data.kodePart}`, 40, 82);
        doc.text("Customer", 14, 90);
        doc.text(`: ${response.data.customer}`, 40, 90);
        doc.text("NG Type", 14, 98);
        doc.text(`: ${response.data.jenisNG}`, 40, 98);

        doc.setLineWidth(0.3);
        doc.line(13, 108, 204, 108);

        doc.setFontSize(12);
        const headerText2 = "PROCESS ABNORMALITY IDENTIFICATION";
        const startX2 = 66;
        const startY2 = 119;
        doc.text(headerText2, startX2, startY2);

        const textWidth2 = doc.getTextWidth(headerText2);
        doc.line(startX2, startY2 + 2, startX2 + textWidth2, startY2 + 2);

        doc.text("Date", 14, 132);
        doc.text(":", 52, 132);
        doc.text("Cause Of Defect", 14, 140);
        doc.text(":", 52, 140);
        doc.text("Action", 14, 190);
        doc.text(":", 52, 190);

        doc.setFontSize(12);
        doc.text("Bekasi,", 158, 242);
        doc.text(currentDate, 172, 242);
        doc.text("PIC", 174, 270);

        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.text(
            `Page ${i} of ${pageCount}`,
            14,
            doc.internal.pageSize.height - 10
          );
        }
        doc.save("report_ppqs.pdf");
      };
      addHeader();
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    addData,
    handleChangeImage,
    addDataNg,
    updateData,
    deleteData,
    deleteDataNg,
    getDataById,
    getDataNgById,
    getAllData,
    getAllDataNg,
    updateDataNg,
    exportToPdf,
    switchTab1,
    switchTab2,
    switchTab3,
    switchTab4,
    switchTabModal1,
    switchTabModal2,
    switchTabModal3,
    switchTabModal4,
  };

  return (
    <DataFunctionContext.Provider value={contextValue}>
      {children}
    </DataFunctionContext.Provider>
  );
};

export const useDataFunctionContext = () => {
  const context = useContext(DataFunctionContext);
  if (!context) {
    throw new Error("Error accessing context");
  }
  return context;
};
