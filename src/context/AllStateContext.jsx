import React, { createContext, useContext, useState } from "react";

const AllStateContext = createContext();

export const AllStateContextProvider = ({ children }) => {
  const [isBtnAddLoading, setIsBtnAddLoading] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const [docId, setDocId] = useState("");
  const [partName, setPartName] = useState("Knob Manual L 1 st");

  const [productionDate, setProductionDate] = useState("");
  const [productionTime, setProductionTime] = useState("");

  const [isError, setIsError] = useState(false);
  const [isValueError, setIsValueError] = useState(false);

  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const [allData, setAllData] = useState([]);

  const [characteristicValue, setCharacteristicValue] = useState([]);
  const [toolValue, setToolValue] = useState([]);

  const [cav1Surface, setCav1Surface] = useState(null);
  const [cav2Surface, setCav2Surface] = useState(null);
  const [cav3Surface, setCav3Surface] = useState(null);
  const [cav4Surface, setCav4Surface] = useState(null);
  const [cav1SurfaceEdit, setCav1SurfaceEdit] = useState(null);
  const [cav2SurfaceEdit, setCav2SurfaceEdit] = useState(null);
  const [cav3SurfaceEdit, setCav3SurfaceEdit] = useState(null);
  const [cav4SurfaceEdit, setCav4SurfaceEdit] = useState(null);

  const [cav1Db, setCav1Db] = useState(null);
  const [cav2Db, setCav2Db] = useState(null);
  const [cav3Db, setCav3Db] = useState(null);
  const [cav4Db, setCav4Db] = useState(null);
  const [cav1DbEdit, setCav1DbEdit] = useState(null);
  const [cav2DbEdit, setCav2DbEdit] = useState(null);
  const [cav3DbEdit, setCav3DbEdit] = useState(null);
  const [cav4DbEdit, setCav4DbEdit] = useState(null);

  const [cav1Pg1, setCav1Pg1] = useState(null);
  const [cav2Pg1, setCav2Pg1] = useState(null);
  const [cav3Pg1, setCav3Pg1] = useState(null);
  const [cav4Pg1, setCav4Pg1] = useState(null);
  const [cav1Pg1Edit, setCav1Pg1Edit] = useState(null);
  const [cav2Pg1Edit, setCav2Pg1Edit] = useState(null);
  const [cav3Pg1Edit, setCav3Pg1Edit] = useState(null);
  const [cav4Pg1Edit, setCav4Pg1Edit] = useState(null);

  const [cav1Pg2, setCav1Pg2] = useState(null);
  const [cav2Pg2, setCav2Pg2] = useState(null);
  const [cav3Pg2, setCav3Pg2] = useState(null);
  const [cav4Pg2, setCav4Pg2] = useState(null);
  const [cav1Pg2Edit, setCav1Pg2Edit] = useState(null);
  const [cav2Pg2Edit, setCav2Pg2Edit] = useState(null);
  const [cav3Pg2Edit, setCav3Pg2Edit] = useState(null);
  const [cav4Pg2Edit, setCav4Pg2Edit] = useState(null);

  const [cav1Tms1, setCav1Tms1] = useState(null);
  const [cav2Tms1, setCav2Tms1] = useState(null);
  const [cav3Tms1, setCav3Tms1] = useState(null);
  const [cav4Tms1, setCav4Tms1] = useState(null);
  const [cav1Tms1Edit, setCav1Tms1Edit] = useState(null);
  const [cav2Tms1Edit, setCav2Tms1Edit] = useState(null);
  const [cav3Tms1Edit, setCav3Tms1Edit] = useState(null);
  const [cav4Tms1Edit, setCav4Tms1Edit] = useState(null);

  const [cav1Tms2, setCav1Tms2] = useState(null);
  const [cav2Tms2, setCav2Tms2] = useState(null);
  const [cav3Tms2, setCav3Tms2] = useState(null);
  const [cav4Tms2, setCav4Tms2] = useState(null);
  const [cav1Tms2Edit, setCav1Tms2Edit] = useState(null);
  const [cav2Tms2Edit, setCav2Tms2Edit] = useState(null);
  const [cav3Tms2Edit, setCav3Tms2Edit] = useState(null);
  const [cav4Tms2Edit, setCav4Tms2Edit] = useState(null);

  const [cav1Tms3, setCav1Tms3] = useState(null);
  const [cav2Tms3, setCav2Tms3] = useState(null);
  const [cav3Tms3, setCav3Tms3] = useState(null);
  const [cav4Tms3, setCav4Tms3] = useState(null);
  const [cav1Tms3Edit, setCav1Tms3Edit] = useState(null);
  const [cav2Tms3Edit, setCav2Tms3Edit] = useState(null);
  const [cav3Tms3Edit, setCav3Tms3Edit] = useState(null);
  const [cav4Tms3Edit, setCav4Tms3Edit] = useState(null);

  const [cav1Tms4, setCav1Tms4] = useState(null);
  const [cav2Tms4, setCav2Tms4] = useState(null);
  const [cav3Tms4, setCav3Tms4] = useState(null);
  const [cav4Tms4, setCav4Tms4] = useState(null);
  const [cav1Tms4Edit, setCav1Tms4Edit] = useState(null);
  const [cav2Tms4Edit, setCav2Tms4Edit] = useState(null);
  const [cav3Tms4Edit, setCav3Tms4Edit] = useState(null);
  const [cav4Tms4Edit, setCav4Tms4Edit] = useState(null);

  const [cav1Tms5, setCav1Tms5] = useState(null);
  const [cav2Tms5, setCav2Tms5] = useState(null);
  const [cav3Tms5, setCav3Tms5] = useState(null);
  const [cav4Tms5, setCav4Tms5] = useState(null);
  const [cav1Tms5Edit, setCav1Tms5Edit] = useState(null);
  const [cav2Tms5Edit, setCav2Tms5Edit] = useState(null);
  const [cav3Tms5Edit, setCav3Tms5Edit] = useState(null);
  const [cav4Tms5Edit, setCav4Tms5Edit] = useState(null);

  const [isTab1Active, setIsTab1Active] = useState(true);
  const [isTab2Active, setIsTab2Active] = useState(false);
  const [isTab3Active, setIsTab3Active] = useState(false);
  const [isTab4Active, setIsTab4Active] = useState(false);

  const [isTab1ModalActive, setIsTab1ModalActive] = useState(true);
  const [isTab2ModalActive, setIsTab2ModalActive] = useState(false);
  const [isTab3ModalActive, setIsTab3ModalActive] = useState(false);
  const [isTab4ModalActive, setIsTab4ModalActive] = useState(false);

  const [dateNow, setDateNow] = useState();

  const contextValue = {
    dateNow,
    setDateNow,
    docId,
    setDocId,
    isError,
    setIsError,
    isValueError,
    setIsValueError,
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
    cav2Tms1,
    cav3Tms1,
    cav4Tms1,
    cav1Tms2,
    cav2Tms2,
    cav3Tms2,
    cav4Tms2,
    cav1Tms3,
    cav2Tms3,
    cav3Tms3,
    cav4Tms3,
    cav1Tms4,
    cav2Tms4,
    cav3Tms4,
    cav4Tms4,
    cav1Tms5,
    cav2Tms5,
    cav3Tms5,
    cav4Tms5,
    setCav1Surface,
    setCav2Surface,
    setCav3Surface,
    setCav4Surface,
    setCav1Db,
    setCav2Db,
    setCav3Db,
    setCav4Db,
    setCav1Pg1,
    setCav2Pg1,
    setCav3Pg1,
    setCav4Pg1,
    setCav1Pg2,
    setCav2Pg2,
    setCav3Pg2,
    setCav4Pg2,
    setCav1Tms1,
    setCav2Tms1,
    setCav3Tms1,
    setCav4Tms1,
    setCav1Tms2,
    setCav2Tms2,
    setCav3Tms2,
    setCav4Tms2,
    setCav1Tms3,
    setCav2Tms3,
    setCav3Tms3,
    setCav4Tms3,
    setCav1Tms4,
    setCav2Tms4,
    setCav3Tms4,
    setCav4Tms4,
    setCav1Tms5,
    setCav2Tms5,
    setCav3Tms5,
    setCav4Tms5,
    cav1DbEdit,
    cav2DbEdit,
    cav3DbEdit,
    cav4DbEdit,
    cav1Pg1Edit,
    cav2Pg1Edit,
    cav3Pg1Edit,
    cav4Pg1Edit,
    cav1Pg2Edit,
    cav2Pg2Edit,
    cav3Pg2Edit,
    cav4Pg2Edit,
    cav1SurfaceEdit,
    cav2SurfaceEdit,
    cav3SurfaceEdit,
    cav4SurfaceEdit,
    cav1Tms1Edit,
    cav2Tms1Edit,
    cav3Tms1Edit,
    cav4Tms1Edit,
    cav1Tms2Edit,
    cav2Tms2Edit,
    cav3Tms2Edit,
    cav4Tms2Edit,
    cav1Tms3Edit,
    cav2Tms3Edit,
    cav3Tms3Edit,
    cav4Tms3Edit,
    cav1Tms4Edit,
    cav2Tms4Edit,
    cav3Tms4Edit,
    cav4Tms4Edit,
    cav1Tms5Edit,
    cav2Tms5Edit,
    cav3Tms5Edit,
    cav4Tms5Edit,
    setCav1DbEdit,
    setCav2DbEdit,
    setCav3DbEdit,
    setCav4DbEdit,
    setCav1Pg1Edit,
    setCav2Pg1Edit,
    setCav3Pg1Edit,
    setCav4Pg1Edit,
    setCav1Pg2Edit,
    setCav2Pg2Edit,
    setCav3Pg2Edit,
    setCav4Pg2Edit,
    setCav1SurfaceEdit,
    setCav2SurfaceEdit,
    setCav3SurfaceEdit,
    setCav4SurfaceEdit,
    setCav1Tms1Edit,
    setCav2Tms1Edit,
    setCav3Tms1Edit,
    setCav4Tms1Edit,
    setCav1Tms2Edit,
    setCav2Tms2Edit,
    setCav3Tms2Edit,
    setCav4Tms2Edit,
    setCav1Tms3Edit,
    setCav2Tms3Edit,
    setCav3Tms3Edit,
    setCav4Tms3Edit,
    setCav1Tms4Edit,
    setCav2Tms4Edit,
    setCav3Tms4Edit,
    setCav4Tms4Edit,
    setCav1Tms5Edit,
    setCav2Tms5Edit,
    setCav3Tms5Edit,
    setCav4Tms5Edit,
    isTab1Active,
    isTab2Active,
    isTab3Active,
    isTab4Active,
    isTab1ModalActive,
    isTab2ModalActive,
    isTab3ModalActive,
    isTab4ModalActive,
    setIsTab1Active,
    setIsTab2Active,
    setIsTab3Active,
    setIsTab4Active,
    setIsTab1ModalActive,
    setIsTab2ModalActive,
    setIsTab3ModalActive,
    setIsTab4ModalActive,
    isBtnAddLoading,
    setIsBtnAddLoading,
    isBtnLoading,
    setIsBtnLoading,
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
