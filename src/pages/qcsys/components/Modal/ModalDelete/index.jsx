import Modal from "@/components/Modal";
import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";

const ModalDelete = () => {
  const { setIsModalDeleteOpen } = useAllStateContext();
  const { deleteData } = useDataFunctionContext();
  return (
    <>
      <Modal
        modalBody={
          <>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalDeleteOpen(false)}
                className="me-1 mb-3">
                ✕
              </button>
            </div>
            <div className="p-2">
              <p>Anda yakin ingin menghapus data?</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsModalDeleteOpen(false)}
                  className="btn btn-sm bg-blue-700 text-white">
                  Tidak
                </button>
                <button
                  onClick={deleteData}
                  className="btn btn-sm btn-error ms-2">
                  Ya
                </button>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
export default ModalDelete;
