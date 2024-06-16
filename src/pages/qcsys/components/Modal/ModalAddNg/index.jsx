import Modal from "@/components/Modal";
import { useAllStateContext } from "@/context/AllStateContext";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useSession } from "next-auth/react";

const ModalAddNg = () => {
  const { data: session } = useSession();
  const {
    setIsModalAddNgOpen,
    partNgName,
    partNgCode,
    customer,
    jenisNg,
    setJenisNg,
    setCustomer,
    setPartNgName,
    setPartNgCode,
    dateForNg,
    setDateForNg,
    isImageSizeError,
  } = useAllStateContext();
  const { addDataNg, handleChangeImage } = useDataFunctionContext();

  const handlePartCode = () => {
    if (partNgName === "Knob Manual L 1st") {
      setPartNgCode("515831-0031");
    } else if (partNgName === "Knob Auto L") {
      setPartNgCode("515832-0020");
    } else if (partNgName === "Knob Auto R") {
      setPartNgCode("515831-0020");
    } else if (partNgName === "Knob Window Lock") {
      setPartNgCode("515831-0050");
    } else if (partNgName === "Straight 3rd") {
      setPartNgCode("Q3ID-019A");
    } else if (partNgName === "Checker") {
      setPartNgCode("Q3ID-020A");
    } else if (partNgName === "Collar") {
      setPartNgCode("Q3ID-021A");
    } else if (partNgName === "Elbow") {
      setPartNgCode("Q3ID-022A");
    } else {
      setPartNgCode("Pilih Part!");
    }
  };

  return (
    <>
      <Modal
        modalBody={
          <>
            <div className="flex justify-between">
              <h1 className="font-semibold">Tambah Data NG</h1>
              <button
                onClick={() => setIsModalAddNgOpen(false)}
                className="me-1 mb-3">
                ✕
              </button>
            </div>
            <hr />
            <form onSubmit={addDataNg}>
              <div className="min-w-full p-1">
                <div className="flex items-center justify-between mt-2 mb-1">
                  <div>
                    <p className="text-primary text-sm underline underline-offset-4 font-semibold">
                      {session?.user.nama}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm mb-1">Tanggal :</label>
                    <input
                      type="date"
                      value={dateForNg}
                      onChange={(e) => setDateForNg(e.target.value)}
                      className="input input-sm input-bordered ms-2"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Nama Part :</label>
                  <select
                    className="select select-sm select-bordered"
                    value={partNgName}
                    onChange={(e) => setPartNgName(e.target.value)}
                    required>
                    <option>Pilih Part</option>
                    <option value={"Knob Manual L 1st"}>
                      Knob Manual L 1st
                    </option>
                    <option value={"Knob Auto L"}>Knob Auto L</option>
                    <option value={"Knob Auto R"}>Knob Auto R</option>
                    <option value={"Knob Window Lock"}>Knob Window Lock</option>
                    <option value={"Straight 3rd"}>Straight 3rd</option>
                    <option value={"Checker"}>Checker</option>
                    <option value={"Collar"}>Collar</option>
                    <option value={"Elbow"}>Elbow</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2">
                  <label className="mb-1">Kode Part :</label>
                  <input
                    type="text"
                    className="input input-sm input-bordered"
                    value={partNgCode}
                    onChange={handlePartCode()}
                    disabled
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="mb-1">Customer :</label>
                  <select
                    className="select select-sm select-bordered"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    required>
                    <option>Pilih Customer</option>
                    <option value={"TRI"}>TRI</option>
                    <option value={"TRHI"}>TRHI</option>
                    <option value={"STEP"}>STEP</option>
                    <option value={"CABININDO"}>CABININDO</option>
                    <option value={"ANI"}>ANI</option>
                  </select>
                </div>
                <div className="flex flex-col min-w-full mt-2">
                  <label className="mb-1">Jenis NG :</label>
                  <select
                    className="select select-sm select-bordered"
                    value={jenisNg}
                    onChange={(e) => setJenisNg(e.target.value)}
                    required>
                    <option>Pilih Jenis NG</option>
                    <option value={"Short Mold"}>Short Mold</option>
                    <option value={"Shining"}>Shining</option>
                    <option value={"Burning Burr"}>Burning Burr</option>
                    <option value={"Dented"}>Dented</option>
                    <option value={"Others"}>Others</option>
                  </select>
                </div>
                <div className="flex flex-col min-w-full mt-2">
                  <label className="mb-1">Lampiran :</label>
                  <input
                    type="file"
                    onChange={handleChangeImage}
                    className="file-input file-input-sm file-input-bordered"
                    required
                  />
                </div>
                <div>
                  {isImageSizeError ? (
                    <p className="text-sm font-semibold text-error mt-2">
                      Ukuran file terlalu besar!
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <hr className="mt-2" />
              <div className="flex justify-end">
                <button type="submit" className="btn btn-sm btn-primary mt-2">
                  Submit
                </button>
              </div>
            </form>
          </>
        }
      />
    </>
  );
};
export default ModalAddNg;
