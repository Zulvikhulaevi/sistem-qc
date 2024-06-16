import Modal from "@/components/Modal";
import { useAllStateContext } from "@/context/AllStateContext";
import Image from "next/image";

const ModalAttachmentDetail = () => {
  const { setIsModalAttachmentDetailOpen, imageUrl } = useAllStateContext();
  return (
    <>
      <Modal
        modalBody={
          <>
            <div className="flex justify-between">
              <h1 className="font-semibold">Lampiran</h1>
              <button
                onClick={() => setIsModalAttachmentDetailOpen(false)}
                className="me-1 mb-3">
                ✕
              </button>
            </div>
            <hr />
            <div className="border-2 mt-3">
              <Image src={imageUrl} width={500} height={500} alt="attachment" />
            </div>
            <hr className="mt-3" />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalAttachmentDetailOpen(false)}
                className="btn btn-sm bg-blue-700 text-white">
                OK
              </button>
            </div>
          </>
        }
      />
    </>
  );
};
export default ModalAttachmentDetail;
