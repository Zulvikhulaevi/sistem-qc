import { useAllStateContext } from "@/context/AllStateContext";
import Cavity1 from "./Cavity1";
import Cavity2 from "./Cavity2";
import Cavity3 from "./Cavity3";
import Cavity4 from "./Cavity4";

const Straight3RdForm = () => {
  const { isTab1Active, isTab2Active, isTab3Active } = useAllStateContext();

  return (
    <>
      <div className="pb-3 px-2">
        <div className="min-h-96 bg-gray-50 border rounded-lg p-3">
          {isTab1Active ? (
            <Cavity1 />
          ) : isTab2Active ? (
            <Cavity2 />
          ) : isTab3Active ? (
            <Cavity3 />
          ) : (
            <Cavity4 />
          )}
        </div>
      </div>
    </>
  );
};
export default Straight3RdForm;
