import { useAllStateContext } from "@/context/AllStateContext";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = (props) => {
  const { data: session } = useSession();
  const { partName, setPartName } = useAllStateContext();

  return (
    <div className="flex justify-between items-center">
      <div className="flex p-2">
        <div className="flex flex-col">
          <span
            className={`label-text ms-1 mb-1 ${
              !partName ? "text-orange-500" : ""
            }`}>
            Pilih Part
          </span>
          <div className="flex">
            <select
              className={`select select-sm select-bordered w-60  ${
                !partName ? "border-orange-500" : ""
              }`}
              value={partName}
              onChange={(e) => setPartName(e.target.value)}>
              <option value="">Pilih Part</option>
              <option value="Knob Manual L 1 st">Knob Manual L 1 st</option>
              <option value="Straight 3rd">Straight 3rd</option>
            </select>
            {!session ? (
              <Link
                href={"/qcsys/ppqs"}
                className="btn btn-sm btn-ghost text-primary underline underline-offset-2 ms-2">
                PPQS
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col ms-2">{props.dateInput}</div>
        <div className="flex flex-col ms-2">{props.timeInput}</div>
      </div>
      {session ? (
        <div className="flex flex-col rounded-lg me-4">
          <p className="text-sm text-center text-primary">
            {session?.user.nama}
          </p>
          <hr />
          <p className="text-sm text-end text-primary">{session?.user.nik}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
