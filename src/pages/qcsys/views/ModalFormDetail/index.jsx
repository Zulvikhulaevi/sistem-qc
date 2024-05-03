import Modal from "@/components/Modal";
import { useAllStateContext } from "@/context/AllStateContext";
import Tablist from "../Tablist";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import AddDataForm from "../FormView/AddDataForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ModalFormDetail = () => {
  const {
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
  const { deleteData, updateData, switchTabModal1, switchTabModal2 } =
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
            <Tablist
              tab1={switchTabModal1}
              tab2={switchTabModal2}
              tab1Active={
                isTab1ModalActive
                  ? "tab font-semibold tab-active"
                  : "tab font-semibold"
              }
              tab2Active={
                isTab2ModalActive
                  ? "tab font-semibold tab-active"
                  : "tab font-semibold"
              }
            />
            <div className="mt-4">
              <AddDataForm
                pgValue={
                  isTab1ModalActive
                    ? cav1PgEdit
                    : isTab2ModalActive
                    ? cav2PgEdit
                    : ""
                }
                setPgValue={
                  isTab1ModalActive
                    ? (e) => setCav1PgEdit(e.target.value)
                    : (e) => setCav2PgEdit(e.target.value)
                }
                tms1Value={
                  isTab1ModalActive
                    ? cav1Tms1Edit
                    : isTab2ModalActive
                    ? cav2Tms1Edit
                    : ""
                }
                setTms1Value={
                  isTab1ModalActive
                    ? (e) => setCav1Tms1Edit(e.target.value)
                    : (e) => setCav2Tms1Edit(e.target.value)
                }
                tms2Value={
                  isTab1ModalActive
                    ? cav1Tms2Edit
                    : isTab2ModalActive
                    ? cav2Tms2Edit
                    : ""
                }
                setTms2Value={
                  isTab1ModalActive
                    ? (e) => setCav1Tms2Edit(e.target.value)
                    : (e) => setCav2Tms2Edit(e.target.value)
                }
              />
            </div>
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
