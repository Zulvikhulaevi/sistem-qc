import { useAllStateContext } from "@/context/AllStateContext";

const KnobManL1stFormContent = (props) => {
  const { isValueError } = useAllStateContext();

  return (
    <>
      {props.title}
      <div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">PG</span>
            <span className="text-sm text-end text-emerald-600">
              3.08 +\- 0.03
            </span>
          </div>
          <div className="flex">
            <input
              type="number"
              value={props.pg1Value}
              onChange={props.setPg1Value}
              className="input input-sm input-bordered w-full"
            />
          </div>
        </label>
      </div>
      <div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">TMS</span>
            <span className="text-sm text-end text-emerald-600">
              3.8 +\- 0.05
            </span>
          </div>
          <div className="flex">
            <input
              type="number"
              value={props.tms1Value}
              onChange={props.setTms1Value}
              className="input input-sm input-bordered w-full"
            />
          </div>
        </label>
      </div>
      <div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">TMS</span>
            <span className="text-sm text-end text-emerald-600">
              17.15 +\- 0.05
            </span>
          </div>
          <div className="flex">
            <input
              type="number"
              value={props.tms2Value}
              onChange={props.setTms2Value}
              className="input input-sm input-bordered w-full"
            />
          </div>
        </label>
      </div>
      <div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">DB</span>
            <span className="text-sm text-end text-emerald-600">
              17.16 +\- 0.35
            </span>
          </div>
          <div className="flex">
            <input
              type="number"
              value={props.dbValue}
              onChange={props.setDbValue}
              className="input input-sm input-bordered w-full"
            />
          </div>
        </label>
      </div>
      {isValueError ? (
        <div className="w-full border border-red-500 bg-error rounded-lg mt-8 p-3">
          <p className="text-center text-sm text-white">
            Periksa kembali hasil pengukuran!
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default KnobManL1stFormContent;
