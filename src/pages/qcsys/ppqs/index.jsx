import { useAllStateContext } from "@/context/AllStateContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import ModalAddNg from "../components/Modal/ModalAddNg";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useEffect } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import ModalNgDetail from "../components/Modal/ModalNgDetail";
import ModalDelete from "../components/Modal/ModalDelete";

const NgReport = () => {
  const { data: session } = useSession();
  const {
    allDataNg,
    isModalAddNgOpen,
    setIsModalAddNgOpen,
    isModalDetailNgOpen,
    setIsModalDetailNgOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
  } = useAllStateContext();
  const { getAllDataNg, getDataNgById, deleteDataNg } =
    useDataFunctionContext();

  useEffect(() => {
    getAllDataNg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className="w-full">
      <div className="p-3">
        <div className="border rounded-lg p-3">
          <div className="flex justify-between w-full">
            <h1 className="font-semibold">Laporan NG</h1>
            <div>
              <p className="text-sm text-primary">
                {session?.user.nama} / {session?.user.nik}
              </p>
              <p className="text-sm text-center text-primary"></p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between">
            <button
              onClick={() => setIsModalAddNgOpen(true)}
              className="btn btn-sm btn-primary shadow-md">
              Tambah
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </button>
          </div>
          <div className="mt-2">
            <table className="table border">
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">Nama Part</th>
                  <th className="text-center">Kode Part</th>
                  <th className="text-center">Customer</th>
                  <th className="text-center">Jenis NG</th>
                  <th className="text-center">Tanggal</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {allDataNg.map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.namaPart}</td>
                    <td className="text-center">{item.kodePart}</td>
                    <td className="text-center">{item.customer}</td>
                    <td className="text-center">{item.jenisNG}</td>
                    <td className="text-center">
                      {format(Date(item.date), "dd/MM/yyyy")}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => {
                          setIsModalDetailNgOpen(true);
                          getDataNgById(item.id);
                        }}
                        className="btn btn-sm btn-primary">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        onClick={() => {
                          setIsModalDeleteOpen(true);
                          getDataNgById(item.id);
                        }}
                        className="btn btn-sm btn-error ms-1 text-white">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalAddNgOpen && <ModalAddNg />}
      {isModalDetailNgOpen && <ModalNgDetail />}
      {isModalDeleteOpen && <ModalDelete clickFunction={deleteDataNg} />}
    </div>
  );
};

export default NgReport;
