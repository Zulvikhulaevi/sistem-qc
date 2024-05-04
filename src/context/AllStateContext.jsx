import React, { createContext, useContext, useState } from "react";

const AllStateContext = createContext();

export const AllStateContextProvider = ({ children }) => {
  const [isBtnAddLoading, setIsBtnAddLoading] = useState(false);

  const [docId, setDocId] = useState("");
  const [partName, setPartName] = useState("");

  const [productionDate, setProductionDate] = useState("");
  const [productionTime, setProductionTime] = useState("");

  const [isError, setIsError] = useState(false);
  const [isPrdDateBlank, setIsPrdDateBlank] = useState(false);
  const [isPrdTimeBlank, setIsPrdTimeBlank] = useState(false);

  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const [allData, setAllData] = useState([]);

  const [characteristicValue, setCharacteristicValue] = useState([]);
  const [toolValue, setToolValue] = useState([]);

  const [cav1pg, setCav1pg] = useState(null);
  const [cav2pg, setCav2pg] = useState(null);
  const [cav1PgEdit, setCav1PgEdit] = useState(null);
  const [cav2PgEdit, setCav2PgEdit] = useState(null);

  const [cav1Tms1, setCav1Tms1] = useState(null);
  const [cav2Tms1, setCav2Tms1] = useState(null);
  const [cav1Tms1Edit, setCav1Tms1Edit] = useState(null);
  const [cav2Tms1Edit, setCav2Tms1Edit] = useState(null);

  const [cav1Tms2, setCav1Tms2] = useState(null);
  const [cav2Tms2, setCav2Tms2] = useState(null);
  const [cav1Tms2Edit, setCav1Tms2Edit] = useState(null);
  const [cav2Tms2Edit, setCav2Tms2Edit] = useState(null);

  const [pointPg, setPointPg] = useState(null);
  const [pointTms1, setPointTms1] = useState(null);
  const [pointTms2, setPointTms2] = useState(null);
  const [pointPgEdit, setPointPgEdit] = useState(null);
  const [pointTms1Edit, setPointTms1Edit] = useState(null);
  const [pointTms2Edit, setPointTms2Edit] = useState(null);

  const [isTab1Active, setIsTab1Active] = useState(true);
  const [isTab2Active, setIsTab2Active] = useState(false);

  const [isTab1ModalActive, setIsTab1ModalActive] = useState(true);
  const [isTab2ModalActive, setIsTab2ModalActive] = useState(false);

  const contextValue = {
    docId,
    setDocId,
    isError,
    setIsError,
    isPrdDateBlank,
    setIsPrdDateBlank,
    isPrdTimeBlank,
    setIsPrdTimeBlank,
    isModalDetailOpen,
    setIsModalDetailOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    partName,
    setPartName,
    productionDate,
    setProductionDate,
    productionTime,
    setProductionTime,
    characteristicValue,
    setCharacteristicValue,
    toolValue,
    setToolValue,
    allData,
    setAllData,
    cav1pg,
    setCav1pg,
    cav2pg,
    setCav2pg,
    cav1Tms1,
    setCav1Tms1,
    cav1Tms2,
    setCav1Tms2,
    cav2Tms1,
    setCav2Tms1,
    cav2Tms2,
    setCav2Tms2,
    pointPg,
    setPointPg,
    pointTms1,
    setPointTms1,
    pointTms2,
    setPointTms2,
    cav1PgEdit,
    setCav1PgEdit,
    cav2PgEdit,
    setCav2PgEdit,
    cav1Tms1Edit,
    setCav1Tms1Edit,
    cav2Tms1Edit,
    setCav2Tms1Edit,
    cav1Tms2Edit,
    setCav1Tms2Edit,
    cav2Tms2Edit,
    setCav2Tms2Edit,
    pointPgEdit,
    setPointPgEdit,
    pointTms1Edit,
    setPointTms1Edit,
    pointTms2Edit,
    setPointTms2Edit,
    isTab1Active,
    setIsTab1Active,
    isTab2Active,
    setIsTab2Active,
    isTab1ModalActive,
    setIsTab1ModalActive,
    isTab2ModalActive,
    setIsTab2ModalActive,
    isBtnAddLoading,
    setIsBtnAddLoading,
  };

  return (
    <AllStateContext.Provider value={contextValue}>
      {children}
    </AllStateContext.Provider>
  );
};

export const useAllStateContext = () => {
  const context = useContext(AllStateContext);
  if (!context) {
    throw new Error("Error accessing context");
  }
  return context;
};
