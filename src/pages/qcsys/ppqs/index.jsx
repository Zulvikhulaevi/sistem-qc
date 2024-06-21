import { useAllStateContext } from "@/context/AllStateContext";
import {
  faArrowLeftLong,
  faFileExport,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import ModalAddNg from "../components/Modal/ModalAddNg";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useEffect } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import ModalNgDetail from "../components/Modal/ModalNgDetail";
import ModalDelete from "../components/Modal/ModalDelete";
import Image from "next/image";
import ModalAttachmentDetail from "../components/Modal/ModalAttachmentDetail";
import Link from "next/link";
import { getDataNgById } from "@/lib/firestore/dataService/DataService";

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
    isModalAttachmentDetailOpen,
    setIsModalAttachmentDetailOpen,
  } = useAllStateContext();
  const { getAllDataNg, getDataNgById, deleteDataNg, exportToPdf } =
    useDataFunctionContext();

  const handlePdf = async (id) => {
    try {
      await getDataNgById(id);
      exportToPdf();
    } catch (error) {
      console.error("Error executing functions", error);
    }
  };

  useEffect(() => {
    getAllDataNg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className="w-full">
      <div className="p-3">
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link href={"/qcsys/fullview"} className="btn btn-sm btn-circle">
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
              <h1 className=" text-sm lg:text-lg font-semibold ms-2">
                Laporan NG
              </h1>
            </div>
            {session ? (
              <div>
                <p className="text-sm text-primary">
                  {session?.user.nama} / {session?.user.nik}
                </p>
                <p className="text-sm text-center text-primary"></p>
              </div>
            ) : (
              ""
            )}
          </div>
          <hr className="my-3" />
          {session ? (
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalAddNgOpen(true)}
                className="btn btn-sm btn-primary shadow-md">
                Tambah
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="mt-2 overflow-x-auto ">
            <table className="table table-xs border">
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">Inspector</th>
                  <th className="text-center">Nama Part</th>
                  <th className="text-center">Kode Part</th>
                  <th className="text-center">Customer</th>
                  <th className="text-center">Jenis NG</th>
                  <th className="text-center">Tanggal</th>
                  <th className="text-center">Lampiran</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {allDataNg.map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.nama}</td>
                    <td className="text-center">{item.namaPart}</td>
                    <td className="text-center">{item.kodePart}</td>
                    <td className="text-center">{item.customer}</td>
                    <td className="text-center">{item.jenisNG}</td>
                    <td className="text-center">
                      {format(new Date(item.date), "dd/MM/yyyy")}
                    </td>
                    <td
                      onClick={() => {
                        setIsModalAttachmentDetailOpen(true);
                        getDataNgById(item.id);
                      }}
                      className="cursor-pointer hover:bg-slate-300 flex justify-center">
                      <Image
                        src={item.imageData.url}
                        width={80}
                        height={80}
                        alt="attachment"
                      />
                    </td>
                    {session ? (
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
                    ) : (
                      <td className="text-center">
                        <button
                          onClick={() => exportToPdf(item.id)}
                          className="btn btn-sm btn-outline me-3">
                          <span>
                            <FontAwesomeIcon icon={faFileExport} />
                          </span>
                          PDF
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalAddNgOpen && <ModalAddNg />}
      {isModalDetailNgOpen && <ModalNgDetail />}
      {isModalAttachmentDetailOpen && <ModalAttachmentDetail />}
      {isModalDeleteOpen && <ModalDelete clickFunction={deleteDataNg} />}
    </div>
  );
};

export default NgReport;
