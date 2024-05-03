import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useEffect } from "react";
import ModalFormDetail from "../../ModalFormDetail";
import ModalDelete from "../../ModalDelete";

const DataTable = () => {
  const {
    partName,
    characteristicValue,
    setCharacteristicValue,
    toolValue,
    setToolValue,
    allData,
    isModalDetailOpen,
    isModalDeleteOpen,
  } = useAllStateContext();

  const { getDataById } = useDataFunctionContext();

  useEffect(() => {
    getPartValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partName]);

  const getPartValue = () => {
    if (partName === "Knob Manual L 1 st") {
      setCharacteristicValue([
        "3.08 +/- 0.03",
        "3.8 +/- 0.05",
        "17.15 +/- 0.05",
      ]);
      setToolValue(["PG", "TMS", "TMS"]);
    } else {
      setCharacteristicValue(["-", "-", "-"]);
      setToolValue(["-", "-", "-"]);
    }
  };

  return (
    <div className="min-h-96 min-w-full px-2 overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-center border" rowSpan={2}>
              Characteristic
            </th>
            <th className="text-center border" rowSpan={2}>
              Tools
            </th>
            <th className="text-center border" rowSpan={2}>
              Cav
            </th>
            <th className="text-center border" colSpan={allData.length}>
              Production Time
            </th>
          </tr>
          <tr>
            {allData.map((item) => (
              <th
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer">
                {item.productionTime}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              {characteristicValue[0]}
            </td>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              {toolValue[0]}
            </td>
            <td className="text-center border " style={{ width: "15%" }}>
              1
            </td>
            {allData.map((item) => (
              <td
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer"
                style={{ width: "15%" }}>
                {item.result.cav1?.pg || "-"}
              </td>
            ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData.map((item) => (
              <td
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer"
                style={{ width: "15%" }}>
                {item.result.cav2?.pg || "-"}
              </td>
            ))}
          </tr>
          <tr>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              {characteristicValue[1]}
            </td>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              {toolValue[1]}
            </td>
            <td className="text-center border" style={{ width: "15%" }}>
              1
            </td>
            {allData.map((item) => (
              <td
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer"
                style={{ width: "15%" }}>
                {item.result.cav1?.tms1 || "-"}
              </td>
            ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData.map((item) => (
              <td
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer"
                style={{ width: "15%" }}>
                {item.result.cav2?.tms1 || "-"}
              </td>
            ))}
          </tr>
          <tr>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              {characteristicValue[2]}
            </td>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              {toolValue[2]}
            </td>
            <td className="text-center border " style={{ width: "15%" }}>
              1
            </td>
            {allData.map((item) => (
              <td
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer"
                style={{ width: "15%" }}>
                {item.result.cav1?.tms2 || "-"}
              </td>
            ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData.map((item) => (
              <td
                onClick={() => getDataById(item.id)}
                key={item.id}
                className="text-center border cursor-pointer"
                style={{ width: "15%" }}>
                {item.result.cav2?.tms2 || "-"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {isModalDetailOpen ? <ModalFormDetail /> : ""}
      {isModalDeleteOpen ? <ModalDelete /> : ""}
    </div>
  );
};

export default DataTable;
