import { useAllStateContext } from "@/context/AllStateContext";
import Cavity1 from "./Cavity1";
import Cavity2 from "./Cavity2";

const KnobManL1stForm = () => {
  const { isTab1Active } = useAllStateContext();

  return (
    <>
      <div className="pb-3 px-2">
        <div className="min-h-96 bg-gray-50 border rounded-lg p-3">
          {isTab1Active ? <Cavity1 /> : <Cavity2 />}
        </div>
      </div>
    </>
  );
};
export default KnobManL1stForm;
