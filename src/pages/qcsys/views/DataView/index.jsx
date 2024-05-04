import { useAllStateContext } from "@/context/AllStateContext";
import Header from "../../components/Header";
import KnobManL1stData from "../../uiByPart/TableByPart/KnobManL1st";

const DataView = () => {
  const { partName } = useAllStateContext();

  const getPartByName = () => {
    if (partName === "Knob Manual L 1 st") {
      return <KnobManL1stData />;
    } else {
      return (
        <div className="container w-full">
          <div className="flex h-96 items-center justify-center">
            <p>Pilih Part!</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container w-2/3 border border-2 rounded-lg px-2 mx-3">
      <Header />
      <hr className="border mt-1 mb-3 mx-2" />
      {getPartByName()}
    </div>
  );
};
export default DataView;
