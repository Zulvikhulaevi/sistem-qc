import Modal from "@/components/Modal";
import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Tab4List from "../../../Tablist/Tab4List";
import Straight3RdFormContent from "../../../FormContent/Straight3Rd";

const ModalFormDetail4List = () => {
  const {
    partName,
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
    setIsModalDetailOpen,
    isTab1ModalActive,
    isTab2ModalActive,
    isTab3ModalActive,
    isTab4ModalActive,
    isBtnAddLoading,
    setIsModalDeleteOpen,
  } = useAllStateContext();
  const {
    updateData,
    switchTabModal1,
    switchTabModal2,
    switchTabModal3,
    switchTabModal4,
  } = useDataFunctionContext();

  return (
    <>
      <Modal
        modalBody={
          <div className="px-3">
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalDetailOpen(false)}
                className="me-1 mb-3">
                ✕
              </button>
            </div>
            <div>
              <Tab4List
                tab1onClick={switchTabModal1}
                tab2onClick={switchTabModal2}
                tab3onClick={switchTabModal3}
                tab4onClick={switchTabModal4}
                tab1Class={
                  isTab1ModalActive
                    ? "tab font-semibold tab-active"
                    : "tab font-semibold"
                }
                tab2Class={
                  isTab2ModalActive
                    ? "tab font-semibold tab-active"
                    : "tab font-semibold"
                }
                tab3Class={
                  isTab3ModalActive
                    ? "tab font-semibold tab-active"
                    : "tab font-semibold"
                }
                tab4Class={
                  isTab4ModalActive
                    ? "tab font-semibold tab-active"
                    : "tab font-semibold"
                }
              />
            </div>
            {partName === "Straight 3rd" ? (
              <div className="mt-4">
                {isTab1ModalActive ? (
                  <>
                    <Straight3RdFormContent
                      title={
                        <div>
                          <p className="text-sm text-center font-semibold">
                            Cavity 1
                          </p>
                          <hr className="border border-gray-400 my-1" />
                        </div>
                      }
                      tms1Value={cav1Tms1Edit}
                      setTms1Value={(e) => setCav1Tms1Edit(e.target.value)}
                      tms2Value={cav1Tms2Edit}
                      setTms2Value={(e) => setCav1Tms2Edit(e.target.value)}
                      tms3Value={cav1Tms3Edit}
                      setTms3Value={(e) => setCav1Tms3Edit(e.target.value)}
                      tms4Value={cav1Tms4Edit}
                      setTms4Value={(e) => setCav1Tms4Edit(e.target.value)}
                      surfaceValue={cav1SurfaceEdit}
                      setSurfaceValue={(e) =>
                        setCav1SurfaceEdit(e.target.value)
                      }
                      pg1Value={cav1Pg1Edit}
                      setPg1Value={(e) => setCav1Pg1Edit(e.target.value)}
                      pg2Value={cav1Pg2Edit}
                      setPg2Value={(e) => setCav1Pg2Edit(e.target.value)}
                      tms5Value={cav1Tms5Edit}
                      setTms5Value={(e) => setCav1Tms5Edit(e.target.value)}
                      dbValue={cav1DbEdit}
                      setDbValue={(e) => setCav1DbEdit(e.target.value)}
                    />
                  </>
                ) : isTab2ModalActive ? (
                  <>
                    <Straight3RdFormContent
                      title={
                        <div>
                          <p className="text-sm text-center font-semibold">
                            Cavity 2
                          </p>
                          <hr className="border border-gray-400 my-1" />
                        </div>
                      }
                      tms1Value={cav2Tms1Edit}
                      setTms1Value={(e) => setCav2Tms1Edit(e.target.value)}
                      tms2Value={cav2Tms2Edit}
                      setTms2Value={(e) => setCav2Tms2Edit(e.target.value)}
                      tms3Value={cav2Tms3Edit}
                      setTms3Value={(e) => setCav2Tms3Edit(e.target.value)}
                      tms4Value={cav2Tms4Edit}
                      setTms4Value={(e) => setCav2Tms4Edit(e.target.value)}
                      surfaceValue={cav2SurfaceEdit}
                      setSurfaceValue={(e) =>
                        setCav2SurfaceEdit(e.target.value)
                      }
                      pg1Value={cav2Pg1Edit}
                      setPg1Value={(e) => setCav2Pg1Edit(e.target.value)}
                      pg2Value={cav2Pg2Edit}
                      setPg2Value={(e) => setCav2Pg2Edit(e.target.value)}
                      tms5Value={cav2Tms5Edit}
                      setTms5Value={(e) => setCav2Tms5Edit(e.target.value)}
                      dbValue={cav2DbEdit}
                      setDbValue={(e) => setCav2DbEdit(e.target.value)}
                    />
                  </>
                ) : isTab3ModalActive ? (
                  <>
                    <Straight3RdFormContent
                      title={
                        <div>
                          <p className="text-sm text-center font-semibold">
                            Cavity 3
                          </p>
                          <hr className="border border-gray-400 my-1" />
                        </div>
                      }
                      tms1Value={cav3Tms1Edit}
                      setTms1Value={(e) => setCav3Tms1Edit(e.target.value)}
                      tms2Value={cav3Tms2Edit}
                      setTms2Value={(e) => setCav3Tms2Edit(e.target.value)}
                      tms3Value={cav3Tms3Edit}
                      setTms3Value={(e) => setCav3Tms3Edit(e.target.value)}
                      tms4Value={cav3Tms4Edit}
                      setTms4Value={(e) => setCav3Tms4Edit(e.target.value)}
                      surfaceValue={cav3SurfaceEdit}
                      setSurfaceValue={(e) =>
                        setCav3SurfaceEdit(e.target.value)
                      }
                      pg1Value={cav3Pg1Edit}
                      setPg1Value={(e) => setCav3Pg1Edit(e.target.value)}
                      pg2Value={cav3Pg2Edit}
                      setPg2Value={(e) => setCav3Pg2Edit(e.target.value)}
                      tms5Value={cav3Tms5Edit}
                      setTms5Value={(e) => setCav3Tms5Edit(e.target.value)}
                      dbValue={cav3DbEdit}
                      setDbValue={(e) => setCav3DbEdit(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <Straight3RdFormContent
                      title={
                        <div>
                          <p className="text-sm text-center font-semibold">
                            Cavity 4
                          </p>
                          <hr className="border border-gray-400 my-1" />
                        </div>
                      }
                      tms1Value={cav4Tms1Edit}
                      setTms1Value={(e) => setCav4Tms1Edit(e.target.value)}
                      tms2Value={cav4Tms2Edit}
                      setTms2Value={(e) => setCav4Tms2Edit(e.target.value)}
                      tms3Value={cav4Tms3Edit}
                      setTms3Value={(e) => setCav4Tms3Edit(e.target.value)}
                      tms4Value={cav4Tms4Edit}
                      setTms4Value={(e) => setCav4Tms4Edit(e.target.value)}
                      surfaceValue={cav4SurfaceEdit}
                      setSurfaceValue={(e) =>
                        setCav4SurfaceEdit(e.target.value)
                      }
                      pg1Value={cav4Pg1Edit}
                      setPg1Value={(e) => setCav4Pg1Edit(e.target.value)}
                      pg2Value={cav4Pg2Edit}
                      setPg2Value={(e) => setCav4Pg2Edit(e.target.value)}
                      tms5Value={cav4Tms5Edit}
                      setTms5Value={(e) => setCav4Tms5Edit(e.target.value)}
                      dbValue={cav4DbEdit}
                      setDbValue={(e) => setCav4DbEdit(e.target.value)}
                    />
                  </>
                )}
              </div>
            ) : (
              ""
            )}
            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={() => setIsModalDeleteOpen(true)}
                disabled={isBtnAddLoading ? true : false}
                className="btn btn-error btn-sm text-white me-2">
                {isBtnAddLoading ? (
                  <div className="flex">
                    <span className="loading loading-spinner loading-sm"></span>
                    <span className="text-sm ms-1">Loading</span>
                  </div>
                ) : (
                  <FontAwesomeIcon icon={faTrashCan} />
                )}
              </button>
              <button
                type="button"
                onClick={updateData}
                disabled={isBtnAddLoading ? true : false}
                className="btn btn-primary btn-sm text-white">
                {isBtnAddLoading ? (
                  <div className="flex">
                    <span className="loading loading-spinner loading-sm"></span>
                    <span className="text-sm ms-1">Loading</span>
                  </div>
                ) : (
                  "Edit"
                )}
              </button>
            </div>
          </div>
        }
      />
    </>
  );
};
export default ModalFormDetail4List;
