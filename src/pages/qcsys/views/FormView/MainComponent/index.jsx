import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useAllStateContext } from "@/context/AllStateContext";
import AddDataFormContainer from "@/components/Layout/FormView/AddDataFormContainer";
import Tablist from "../../Tablist";
import AddDataForm from "../AddDataForm";

const MainComponent = () => {
  const { addData } = useDataFunctionContext();
  const {
    partName,
    cav1pg,
    cav2pg,
    setCav1pg,
    setCav2pg,
    cav1Tms1,
    cav2Tms1,
    setCav1Tms1,
    setCav2Tms1,
    cav1Tms2,
    cav2Tms2,
    setCav1Tms2,
    setCav2Tms2,
    isTab1Active,
    isTab2Active,
    isBtnAddLoading,
  } = useAllStateContext();
  const { switchTab1, switchTab2 } = useDataFunctionContext();

  return (
    <>
      <div className="flex w-full items-center px-3">
        <Tablist
          tab1={switchTab1}
          tab2={switchTab2}
          tab1Active={
            isTab1Active ? "tab font-semibold tab-active" : "tab font-semibold"
          }
          tab2Active={
            isTab2Active ? "tab font-semibold tab-active" : "tab font-semibold"
          }
        />
      </div>
      <div className="px-3">
        <hr className="border my-3" />
      </div>
      <div className="pb-3">
        <AddDataFormContainer
          content={
            <>
              {isTab1Active ? (
                <>
                  <p className="text-sm text-center font-semibold">Cavity 1</p>
                  <hr className="border border-gray-400 my-1" />
                  <div>
                    {partName === "Knob Manual L 1 st" ? (
                      <AddDataForm
                        pgValue={cav1pg ? cav1pg : ""}
                        setPgValue={(e) => setCav1pg(e.target.value)}
                        tms1Value={cav1Tms1 ? cav1Tms1 : ""}
                        setTms1Value={(e) => setCav1Tms1(e.target.value)}
                        tms2Value={cav1Tms2 ? cav1Tms2 : ""}
                        setTms2Value={(e) => setCav1Tms2(e.target.value)}
                      />
                    ) : (
                      <div className="flex h-80 items-center justify-center">
                        <div className="border border-red-200 p-3">
                          <p className="text-center text-error">
                            Pilih Part Terlebih Dahulu
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-center font-semibold">Cavity 2</p>
                  <hr className="border border-gray-400 my-1" />
                  <div>
                    {partName === "Knob Manual L 1 st" ? (
                      <AddDataForm
                        pgValue={cav2pg ? cav2pg : ""}
                        setPgValue={(e) => setCav2pg(e.target.value)}
                        tms1Value={cav2Tms1 ? cav2Tms1 : ""}
                        setTms1Value={(e) => setCav2Tms1(e.target.value)}
                        tms2Value={cav2Tms2 ? cav2Tms2 : ""}
                        setTms2Value={(e) => setCav2Tms2(e.target.value)}
                      />
                    ) : (
                      <div className="flex h-80 items-center justify-center">
                        <div className="border border-red-200 p-3">
                          <p className="text-center text-error">
                            Pilih Part Terlebih Dahulu
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          }
        />
      </div>
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
    </>
  );
};
export default MainComponent;
