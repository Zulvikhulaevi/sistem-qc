import { useAllStateContext } from "@/context/AllStateContext";
import ModalDelete from "@/pages/qcsys/components/Modal/ModalDelete";
import ModalFormDetail2List from "@/pages/qcsys/components/Modal/ModalFormDetail/KnobManL1st";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Link from "next/link";

const KnobManL1stFullView = () => {
  const { allData, isModalDetailOpen, isModalDeleteOpen } =
    useAllStateContext();

  return (
    <div className="flex min-h-96 min-w-full px-2 overflow-x-auto">
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
                <th key={item.id} className="text-center border">
                  {item.productionDate}
                </th>
              ))}
          </tr>
          <tr>
            {allData
              .slice()
              .reverse()
              .map((item) => (
                <th key={item.id} className="text-center border">
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
                  key={item.id}
                  className="text-center border"
                  style={{ width: "15%" }}>
                  {item.result.cav1?.pg1 || "-"}
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
                  key={item.id}
                  className="text-center border"
                  style={{ width: "15%" }}>
                  {item.result.cav2?.pg1 || "-"}
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
                  key={item.id}
                  className="text-center border"
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
                  key={item.id}
                  className="text-center border"
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
                  key={item.id}
                  className="text-center border"
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
                  key={item.id}
                  className="text-center border"
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
                  key={item.id}
                  className="text-center border"
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
                  key={item.id}
                  className="text-center border"
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
                <td key={item.id} className="text-center border">
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
                <td key={item.id} className="text-center border">
                  {format(new Date(item.date.seconds * 1000), "dd/MM/yyyy") ||
                    "-"}
                </td>
              ))}
          </tr>
        </tbody>
      </table>
      <div className="flex min-h-full items-center justify-center">
        <Link href={"/qcsys"} className="btn btn-sm btn-base h-full ms-1">
          <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        </Link>
      </div>
      {isModalDetailOpen && <ModalFormDetail2List />}
      {isModalDeleteOpen && <ModalDelete />}
    </div>
  );
};

export default KnobManL1stFullView;
