import { useAllStateContext } from "@/context/AllStateContext";

const Straight3RdFormContent = (props) => {
  const { isValueError } = useAllStateContext();

  return (
    <>
      {props.title}
      <div className="container flex">
        <div className="w-1/2 me-3">
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">TMS</span>
                <span className="text-sm text-end text-emerald-600">
                  10.5 +\- 0.1
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
                  10.5 +\- 0.1
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
                <span className="label-text">TMS</span>
                <span className="text-sm text-end text-emerald-600">
                  5 +\- 0.1
                </span>
              </div>
              <div className="flex">
                <input
                  type="number"
                  value={props.tms3Value}
                  onChange={props.setTms3Value}
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
                  3.5 +\- 0.05
                </span>
              </div>
              <div className="flex">
                <input
                  type="number"
                  value={props.tms4Value}
                  onChange={props.setTms4Value}
                  className="input input-sm input-bordered w-full"
                />
              </div>
            </label>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Surface Test</span>
                <span className="text-sm text-end text-emerald-600">6.3</span>
              </div>
              <div className="flex">
                <input
                  type="number"
                  value={props.surfaceValue}
                  onChange={props.setSurfaceValue}
                  className="input input-sm input-bordered w-full"
                />
              </div>
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">PG</span>
                <span className="text-sm text-end text-emerald-600">
                  6.45 +/- 0.05
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
                <span className="label-text">PG</span>
                <span className="text-sm text-end text-emerald-600">
                  8.9 +/- 0.05
                </span>
              </div>
              <div className="flex">
                <input
                  type="number"
                  value={props.pg2Value}
                  onChange={props.setPg2Value}
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
                  0 - 0.02 Max
                </span>
              </div>
              <div className="flex">
                <input
                  type="number"
                  value={props.tms5Value}
                  onChange={props.setTms5Value}
                  className="input input-sm input-bordered w-full"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">DB</span>
            <span className="text-sm text-end text-emerald-600">
              6.88 +/- 0.344
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

export default Straight3RdFormContent;
