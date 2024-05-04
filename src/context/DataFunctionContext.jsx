import axios from "axios";
import React, { createContext, useContext } from "react";
import { useAllStateContext } from "./AllStateContext";
import { useSession } from "next-auth/react";

const DataFunctionContext = createContext();

export const DataFunctionContextProvider = ({ children }) => {
  const { data: session } = useSession();
  const {
    setIsBtnAddLoading,
    setIsModalDetailOpen,
    setIsModalDeleteOpen,
    docId,
    setDocId,
    partName,
    setIsError,
    setIsPrdTimeBlank,
    setIsPrdDateBlank,
    productionDate,
    productionTime,
    setIsTab1Active,
    setIsTab2Active,
    setIsTab1ModalActive,
    setIsTab2ModalActive,
    cav1pg,
    cav2pg,
    cav1Tms1,
    cav1Tms2,
    cav2Tms1,
    cav2Tms2,
    pointPg,
    pointTms1,
    pointTms2,
    setAllData,
    setCav1PgEdit,
    setCav2PgEdit,
    setCav1Tms1Edit,
    setCav2Tms1Edit,
    setCav1Tms2Edit,
    setCav2Tms2Edit,
    setPointPgEdit,
    setPointTms1Edit,
    setPointTms2Edit,
    pointPgEdit,
    pointTms1Edit,
    pointTms2Edit,
    cav1PgEdit,
    cav2PgEdit,
    cav1Tms1Edit,
    cav1Tms2Edit,
    cav2Tms1Edit,
    cav2Tms2Edit,
  } = useAllStateContext();

  const switchTab1 = () => {
    setIsTab1Active(true);
    setIsTab2Active(false);
  };

  const switchTab2 = () => {
    setIsTab2Active(true);
    setIsTab1Active(false);
  };

  const switchTabModal1 = () => {
    setIsTab1ModalActive(true);
    setIsTab2ModalActive(false);
  };

  const switchTabModal2 = () => {
    setIsTab2ModalActive(true);
    setIsTab1ModalActive(false);
  };

  const addData = async () => {
    const KnobManL1st = {
      partName: partName,
      name: session?.user.nama,
      nik: session?.user.nik,
      productionDate: productionDate,
      productionTime: productionTime,
      pointPg: pointPg,
      pointTms1: pointTms1,
      pointTms2: pointTms2,
      cav1pg: cav1pg,
      cav1Tms1: cav1Tms1,
      cav1Tms2: cav1Tms2,
      cav2pg: cav2pg,
      cav2Tms1: cav2Tms1,
      cav2Tms2: cav2Tms2,
    };
    let data;
    if (!productionDate) {
      setIsPrdDateBlank(true);
    } else if (!productionTime) {
      setIsPrdTimeBlank(true);
    } else {
      if (partName === "Knob Manual L 1 st") {
        if (
          cav1pg >= 3.05 &&
          cav1pg <= 3.11 &&
          cav2pg >= 3.05 &&
          cav2pg <= 3.11 &&
          cav1Tms1 >= 3.75 &&
          cav1Tms1 <= 3.85 &&
          cav2Tms1 >= 3.75 &&
          cav2Tms1 <= 3.85 &&
          cav1Tms2 >= 17.1 &&
          cav1Tms2 <= 17.2 &&
          cav2Tms2 >= 17.1 &&
          cav2Tms2 <= 17.2
        ) {
          data = KnobManL1st;
        } else {
          setIsError(true);
        }
        try {
          setIsBtnAddLoading(true);
          const response = await axios.post("/api/data/addData", data);
          const { docId } = response.data;
          setDocId(docId);
          setIsPrdDateBlank(false);
          setIsPrdTimeBlank(false);
          setIsError(false);
          await getAllData();
          setIsBtnAddLoading(false);
        } catch (error) {
          setIsBtnAddLoading(false);
          console.log(error);
        }
      }
    }
  };

  const updateData = async () => {
    try {
      await axios.patch("/api/data/updateData", {
        docId: docId,
        partName: partName,
        name: session?.user.nama,
        nik: session?.user.nik,
        productionDate: productionDate,
        productionTime: productionTime,
        pointPg: pointPgEdit,
        pointTms1: pointTms1Edit,
        pointTms2: pointTms2Edit,
        cav1pg: cav1PgEdit,
        cav2pg: cav2PgEdit,
        cav1Tms1: cav1Tms1Edit,
        cav2Tms1: cav2Tms1Edit,
        cav1Tms2: cav1Tms2Edit,
        cav2Tms2: cav2Tms2Edit,
      });
      await getAllData();
      setIsModalDetailOpen(false);
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
      setIsModalDetailOpen(true);
      const response = await axios.get(`/api/data/getDataById?docId=${itemId}`);
      setDocId(response.data.id);
      setPointPgEdit(response.data.result.pointPg);
      setPointTms1Edit(response.data.result.pointTms1);
      setPointTms2Edit(response.data.result.pointTms2);
      setCav1PgEdit(response.data.result.cav1.pg);
      setCav2PgEdit(response.data.result.cav2.pg);
      setCav1Tms1Edit(response.data.result.cav1.tms1);
      setCav2Tms1Edit(response.data.result.cav2.tms1);
      setCav1Tms2Edit(response.data.result.cav1.tms2);
      setCav2Tms2Edit(response.data.result.cav2.tms2);
      console.log(docId);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllData = async () => {
    try {
      const response = await axios.get("/api/data/getAllData");
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    addData,
    updateData,
    deleteData,
    getDataById,
    getAllData,
    switchTab1,
    switchTab2,
    switchTabModal1,
    switchTabModal2,
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
