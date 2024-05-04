import KnobManL1stForm from "../../uiByPart/FormByPart/KnobManL1st";
import Tab2List from "../../components/Tablist/Tab2List";
import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";

const FormView = () => {
  const { partName } = useAllStateContext();

  const { addData, switchTab1, switchTab2 } = useDataFunctionContext();
  const { isTab1Active, isTab2Active, isBtnAddLoading } = useAllStateContext();

  const getFormByPartName = () => {
    if (partName === "Knob Manual L 1 st") {
      return <KnobManL1stForm />;
    } else {
      return (
        <div className="flex h-80 items-center justify-center">
          <div className="border border-red-200 p-3">
            <p className="text-center text-error">Pilih Part Terlebih Dahulu</p>
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
      <div className="flex justify-end px-3 mb-3">
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
