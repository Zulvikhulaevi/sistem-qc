import KnobManL1stForm from "../../uiByPart/FormByPart/KnobManL1st";
import Tab2List from "../../components/Tablist/Tab2List";
import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const FormView = () => {
  const { partName } = useAllStateContext();

  const { addData, switchTab1, switchTab2 } = useDataFunctionContext();
  const { isError, isTab1Active, isTab2Active, isBtnAddLoading } =
    useAllStateContext();

  const getFormByPartName = () => {
    if (partName === "Knob Manual L 1 st") {
      return <KnobManL1stForm />;
    } else {
      return (
        <div className="container flex min-h-96 w-full items-center justify-center">
          <div className="container w-1/2 border rounded-2xl border-orange-500 p-3">
            <p className="text-center text-orange-500">
              <span className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  size="xl"
                  className="me-3"
                />
                Pilih Part!
              </span>
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container w-1/3 min-h-96 border border-2 rounded-lg ms-2 px-3">
      <div className="flex w-full items-center px-2">
        <Tab2List
          tab1onClick={switchTab1}
          tab2onClick={switchTab2}
          tab1Class={
            isTab1Active ? "tab font-semibold tab-active" : "tab font-semibold"
          }
          tab2Class={
            isTab2Active ? "tab font-semibold tab-active" : "tab font-semibold"
          }
        />
      </div>
      <div className="px-3">
        <hr className="border my-3" />
      </div>
      <>{getFormByPartName()}</>
      <div className="flex items-center justify-between px-3 mb-3">
        {isError ? (
          <p className="text-sm text-error me-3">Data tidak lengkap!</p>
        ) : (
          <div></div>
        )}
        <button
          type="button"
          onClick={addData}
          disabled={isBtnAddLoading ? true : false}
          className="btn btn-primary btn-sm text-white">
          {isBtnAddLoading ? (
            <div className="flex">
              <span className="loading loading-spinner loading-sm"></span>
              <span className="text-sm ms-1">Loading</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};
export default FormView;
