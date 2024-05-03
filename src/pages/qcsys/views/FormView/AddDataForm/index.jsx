import { useAllStateContext } from "@/context/AllStateContext";

const AddDataForm = (props) => {
  const {
    pointPg,
    setPointPg,
    pointTms1,
    setPointTms1,
    pointTms2,
    setPointTms2,
    isError,
  } = useAllStateContext();

  return (
    <div>
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
              placeholder="Point"
              value={pointPg}
              onChange={(e) => setPointPg(e.target.value)}
              className="input input-sm input-bordered w-1/2"
            />
            <input
              type="number"
              value={props.pgValue}
              onChange={props.setPgValue}
              className="input input-sm input-bordered w-full ms-2"
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
              type="text"
              placeholder="Point"
              value={pointTms1}
              onChange={(e) => setPointTms1(e.target.value)}
              className="input input-sm input-bordered w-1/2"
            />
            <input
              type="number"
              value={props.tms1Value}
              onChange={props.setTms1Value}
              className="input input-sm input-bordered w-full ms-2"
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
              type="text"
              placeholder="Point"
              value={pointTms2}
              onChange={(e) => setPointTms2(e.target.value)}
              className="input input-sm input-bordered w-1/2"
            />
            <input
              type="text"
              value={props.tms2Value}
              onChange={props.setTms2Value}
              className="input input-sm input-bordered w-full ms-2"
            />
          </div>
        </label>
      </div>
      {isError ? (
        <div className="w-full border border-red-500 bg-error rounded-lg mt-8 p-3">
          <p className="text-center text-sm text-white">
            Periksa kembali hasil pengukuran!
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddDataForm;
