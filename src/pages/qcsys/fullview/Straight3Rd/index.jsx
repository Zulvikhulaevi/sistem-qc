import { useAllStateContext } from "@/context/AllStateContext";
import ModalDelete from "@/pages/qcsys/components/Modal/ModalDelete";
import ModalFormDetail4List from "@/pages/qcsys/components/Modal/ModalFormDetail/Straight3Rd";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Link from "next/link";

const Straight3RdFullView = () => {
  const { allData, isModalDetailOpen, isModalDeleteOpen } =
    useAllStateContext();

  return (
    <div className="flex min-w-full min-h-96 max-h-96 px-2">
      <div className="flex w-full overflow-x-auto overflow-y-auto">
        <table className="table table-xs table-pin-rows">
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
              <td className="border " rowSpan={4} style={{ width: "10%" }}>
                <span className="me-4 font-semibold">29.</span>10.5 +/- 0.1
              </td>
              <td className="text-center border " rowSpan={4}>
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
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.tms1 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.tms1 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border " rowSpan={4} style={{ width: "10%" }}>
                <span className="me-4 font-semibold">30.</span>10.5 +/- 0.1
              </td>
              <td
                className="text-center border "
                rowSpan={4}
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
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.tms2 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.tms2 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">63.</span>5 +/- 0.1
              </td>
              <td
                className="text-center border "
                rowSpan={4}
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
                    {item.result.cav1?.tms3 || "-"}
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
                    {item.result.cav2?.tms3 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.tms3 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.tms3 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">70.</span>3.5 +/- 0.05
              </td>
              <td
                className="text-center border "
                rowSpan={4}
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
                    {item.result.cav1?.tms4 || "-"}
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
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.tms4 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.tms4 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">79.</span>6.3
              </td>
              <td
                className="text-center border "
                rowSpan={4}
                style={{ width: "10%" }}>
                Surface
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
                    {item.result.cav1?.surfaceTest || "-"}
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
                    {item.result.cav2?.surfaceTest || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.surfaceTest || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.surfaceTest || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">80.</span>6.45 +/- 0.05
              </td>
              <td
                className="text-center border "
                rowSpan={4}
                style={{ width: "10%" }}>
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
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.pg1 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.pg1 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">81.</span>8.9 +/- 0.05
              </td>
              <td
                className="text-center border "
                rowSpan={4}
                style={{ width: "10%" }}>
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
                    {item.result.cav1?.pg2 || "-"}
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
                    {item.result.cav2?.pg2 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.pg2 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.pg2 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">100.</span>0 - 0.02 Max
              </td>
              <td
                className="text-center border "
                rowSpan={4}
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
                    {item.result.cav1?.tms5 || "-"}
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
                    {item.result.cav2?.tms5 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.tms5 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.tms5 || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="border" rowSpan={4} style={{ width: "15%" }}>
                <span className="me-4 font-semibold">ADD.</span>6.88 +/- 0.344
              </td>
              <td
                className="text-center border "
                rowSpan={4}
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
              <td className="text-center border " style={{ width: "15%" }}>
                3
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav3?.db || "-"}
                  </td>
                ))}
            </tr>
            <tr>
              <td className="text-center border " style={{ width: "15%" }}>
                4
              </td>
              {allData
                .slice()
                .reverse()
                .map((item) => (
                  <td
                    key={item.id}
                    className="text-center border"
                    style={{ width: "15%" }}>
                    {item.result.cav4?.db || "-"}
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
        {isModalDetailOpen && <ModalFormDetail4List />}
        {isModalDeleteOpen && <ModalDelete />}
      </div>
      <div className="flex min-h-full items-center justify-center">
        <Link href={"/qcsys"} className="btn btn-sm btn-base h-full ms-2">
          <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        </Link>
      </div>
    </div>
  );
};

export default Straight3RdFullView;
