import { useAllStateContext } from "@/context/AllStateContext";
import Header from "../../components/Header";
import KnobManL1stData from "../../uiByPart/TableByPart/KnobManL1st";
import Straight3RdData from "../../uiByPart/TableByPart/Straight3Rd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDataFunctionContext } from "@/context/DataFunctionContext";

const DataView = () => {
  const {
    partName,
    productionDate,
    setProductionDate,
    productionTime,
    setProductionTime,
  } = useAllStateContext();

  const getPartByName = () => {
    if (partName === "Knob Manual L 1 st") {
      return <KnobManL1stData />;
    } else if (partName === "Straight 3rd") {
      return <Straight3RdData />;
    } else {
      return null;
    }
  };

  return (
    <div className="container w-2/3 border border-2 rounded-lg px-2 mx-3">
      <Header
        dateInput={
          <>
            <span
              className={`label-text ms-1 mb-1 ${
                !productionDate ? "text-orange-500" : ""
              }`}>
              Production Date
            </span>
            <input
              type="text"
              placeholder="040426M1-05C"
              value={productionDate}
              onChange={(e) => setProductionDate(e.target.value)}
              className={`input input-sm input-bordered ${
                !productionDate ? "border-orange-500" : ""
              }`}
            />
          </>
        }
        timeInput={
          <>
            <span
              className={`label-text ms-1 mb-1 ${
                !productionTime ? "text-orange-500" : ""
              }`}>
              Production Time
            </span>
            <input
              type="time"
              value={productionTime}
              onChange={(e) => setProductionTime(e.target.value)}
              className={`input input-sm input-bordered ${
                !productionTime ? "border-orange-500" : ""
              }`}
            />
          </>
        }
      />
      <hr className="border mt-1 mb-1 mx-2" />
      <div className="flex justify-end">
        <Link href={"/qcsys/fullview"} className="btn btn-sm btn-ghost mb-1">
          <FontAwesomeIcon icon={faExpand} size="lg" />
        </Link>
      </div>
      {getPartByName()}
    </div>
  );
};
export default DataView;
