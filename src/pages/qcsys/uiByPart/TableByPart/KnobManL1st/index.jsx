import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import ModalDelete from "@/pages/qcsys/components/Modal/ModalDelete";
import ModalFormDetail from "@/pages/qcsys/components/Modal/ModalFormDetail";
import { format } from "date-fns";

const KnobManL1stData = () => {
  const { allData, isModalDetailOpen, isModalDeleteOpen } =
    useAllStateContext();
  const { getDataById } = useDataFunctionContext();

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
            <th className="text-center border" rowSpan={3}>
              Cav
            </th>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <th
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100">
                  {item.productionDate}
                </th>
              ))}
          </tr>
          <tr>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <th
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100">
                  {item.productionTime}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border " rowSpan={2} style={{ width: "10%" }}>
              <span className="me-4 font-semibold">17.</span>3.08 +/- 0.03
            </td>
            <td className="text-center border " rowSpan={2}>
              PG
            </td>
            <td className="text-center border " style={{ width: "15%" }}>
              1
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav1?.pg || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav2?.pg || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="border " rowSpan={2} style={{ width: "10%" }}>
              <span className="me-4 font-semibold">25.</span>3.8 +/- 0.05
            </td>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              TMS
            </td>
            <td className="text-center border" style={{ width: "15%" }}>
              1
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav1?.tms1 || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav2?.tms1 || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="border" rowSpan={2} style={{ width: "15%" }}>
              <span className="me-4 font-semibold">42.</span>17.15 +/- 0.05
            </td>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              TMS
            </td>
            <td className="text-center border " style={{ width: "15%" }}>
              1
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav1?.tms2 || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav2?.tms2 || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="border" rowSpan={2} style={{ width: "15%" }}>
              <span className="me-4 font-semibold">ADD.</span>17.16 +/- 0.35
            </td>
            <td
              className="text-center border "
              rowSpan={2}
              style={{ width: "10%" }}>
              DB
            </td>
            <td className="text-center border " style={{ width: "15%" }}>
              1
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav1?.db || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="text-center border " style={{ width: "15%" }}>
              2
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100"
                  style={{ width: "15%" }}>
                  {item.result.cav2?.db || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="font-semibold border" colSpan={3}>
              Inspected By
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100">
                  {item.name || "-"}
                </td>
              ))}
          </tr>
          <tr>
            <td className="font-semibold border" colSpan={3}>
              Inspection Date
            </td>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <td
                  onClick={() => getDataById(item.id)}
                  key={item.id}
                  className="text-center border cursor-pointer hover:bg-slate-100">
                  {format(new Date(item.date.seconds * 1000), "dd/MM/yyyy") ||
                    "-"}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
      {isModalDetailOpen && <ModalFormDetail />}
      {isModalDeleteOpen && <ModalDelete />}
    </div>
  );
};

export default KnobManL1stData;
