import { useAllStateContext } from "@/context/AllStateContext";
import Header from "../components/Header";
import { useEffect } from "react";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import KnobManL1stFullView from "./KnobManL1st";
import Straight3RdFullView from "./Straight3Rd";

const QcDataView = () => {
  const { partName } = useAllStateContext();
  const { getAllData } = useDataFunctionContext();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partName]);

  const getPartByName = () => {
    if (partName === "Knob Manual L 1 st") {
      return <KnobManL1stFullView />;
    } else if (partName === "Straight 3rd") {
      return <Straight3RdFullView />;
    } else {
      return null;
    }
  };
  return (
    <div className="container min-w-full min-h-screen p-3">
      <div className="w-full border rounded">
        <Header />
        <hr className="border mt-2 mb-2 mx-2" />
        {getPartByName()}
      </div>
    </div>
  );
};
export default QcDataView;
