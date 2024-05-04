import Modal from "@/components/Modal";
import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Tab2List from "../../Tablist/Tab2List";
import KnobManL1stFormContent from "../../FormContent/KnobManL1st";

const ModalFormDetail = () => {
  const {
    partName,
    pointPgEdit,
    pointTms1Edit,
    pointTms2Edit,
    setPointPgEdit,
    setPointTms1Edit,
    setPointTms2Edit,
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
    setIsModalDetailOpen,
    isTab1ModalActive,
    isTab2ModalActive,
    isBtnAddLoading,
    setIsModalDeleteOpen,
  } = useAllStateContext();
  const { updateData, switchTabModal1, switchTabModal2 } =
    useDataFunctionContext();

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
              <Tab2List
                tab1onClick={switchTabModal1}
                tab2onClick={switchTabModal2}
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
              />
            </div>
            {partName === "Knob Manual L 1 st" ? (
              <div className="mt-4">
                {isTab1ModalActive ? (
                  <>
                    <KnobManL1stFormContent
                      title={
                        <div className="mb-2">
                          <p className="text-sm text-center font-semibold">
                            Cavity 1
                          </p>
                          <hr className="border border-gray-400 my-1" />
                        </div>
                      }
                      pointPgValue={pointPgEdit}
                      setPointPgValue={(e) => setPointPgEdit(e.target.value)}
                      pointTms1Value={pointTms1Edit}
                      setPointTms1Value={(e) =>
                        setPointTms1Edit(e.target.value)
                      }
                      pointTms2Value={pointTms2Edit}
                      setPointTms2Value={(e) =>
                        setPointTms2Edit(e.target.value)
                      }
                      pgValue={cav1PgEdit}
                      setPgValue={(e) => setCav1PgEdit(e.target.value)}
                      tms1Value={cav1Tms1Edit}
                      setTms1Value={(e) => setCav1Tms1Edit(e.target.value)}
                      tms2Value={cav1Tms2Edit}
                      setTms2Value={(e) => setCav1Tms2Edit(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <KnobManL1stFormContent
                      title={
                        <div className="mb-2">
                          <p className="text-sm text-center font-semibold">
                            Cavity 2
                          </p>
                          <hr className="border border-gray-400 my-1" />
                        </div>
                      }
                      pointPgValue={pointPgEdit}
                      setPointPgValue={(e) => setPointPgEdit(e.target.value)}
                      pointTms1Value={pointTms1Edit}
                      setPointTms1Value={(e) =>
                        setPointTms1Edit(e.target.value)
                      }
                      pointTms2Value={pointTms2Edit}
                      setPointTms2Value={(e) =>
                        setPointTms2Edit(e.target.value)
                      }
                      pgValue={cav2PgEdit}
                      setPgValue={(e) => setCav2PgEdit(e.target.value)}
                      tms1Value={cav2Tms1Edit}
                      setTms1Value={(e) => setCav2Tms1Edit(e.target.value)}
                      tms2Value={cav2Tms2Edit}
                      setTms2Value={(e) => setCav2Tms2Edit(e.target.value)}
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
export default ModalFormDetail;
