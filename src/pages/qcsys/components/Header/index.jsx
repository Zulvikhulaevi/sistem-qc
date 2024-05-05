import { useAllStateContext } from "@/context/AllStateContext";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const {
    partName,
    setPartName,
    productionDate,
    setProductionDate,
    productionTime,
    setProductionTime,
  } = useAllStateContext();

  return (
    <div className="flex justify-between items-center">
      <div className="flex p-2">
        <div className="flex flex-col">
          <span
            className={`label-text ms-1 mb-1 ${
              !partName ? "text-red-500" : ""
            }`}>
            Pilih Part
          </span>
          <select
            className={`select select-sm select-bordered w-60  ${
              !partName ? "border-red-500" : ""
            }`}
            value={partName}
            onChange={(e) => setPartName(e.target.value)}>
            <option value="">Pilih Part</option>
            <option value="Knob Manual L 1 st">Knob Manual L 1 st</option>
            <option value="Straight 3rd">Straight 3rd</option>
          </select>
        </div>
        <div className="flex flex-col ms-2">
          <span
            className={`label-text ms-1 mb-1 ${
              !productionDate ? "text-red-500" : ""
            }`}>
            Production Date
          </span>
          <input
            type="text"
            placeholder="040426M1-05C"
            value={productionDate}
            onChange={(e) => setProductionDate(e.target.value)}
            className={`input input-sm input-bordered ${
              !productionDate ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="flex flex-col ms-2">
          <span
            className={`label-text ms-1 mb-1 ${
              !productionTime ? "text-red-500" : ""
            }`}>
            Production Time
          </span>
          <input
            type="time"
            value={productionTime}
            onChange={(e) => setProductionTime(e.target.value)}
            className={`input input-sm input-bordered ${
              !productionTime ? "border-red-500" : ""
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col rounded-lg me-4">
        <p className="text-sm text-primary">{session?.user.nama}</p>
        <hr />
        <p className="text-sm text-end text-primary">{session?.user.nik}</p>
      </div>
    </div>
  );
};
export default Header;
