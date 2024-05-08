import { useAllStateContext } from "@/context/AllStateContext";
import Straight3RdFormContent from "@/pages/qcsys/components/FormContent/Straight3Rd";

const Cavity3 = () => {
  const {
    cav3Surface,
    cav3Db,
    cav3Pg1,
    cav3Pg2,
    cav3Tms1,
    cav3Tms2,
    cav3Tms3,
    cav3Tms4,
    cav3Tms5,
    setCav3Surface,
    setCav3Db,
    setCav3Pg1,
    setCav3Pg2,
    setCav3Tms1,
    setCav3Tms2,
    setCav3Tms3,
    setCav3Tms4,
    setCav3Tms5,
  } = useAllStateContext();

  return (
    <>
      <Straight3RdFormContent
        title={
          <div>
            <p className="text-sm text-center font-semibold">Cavity 3</p>
            <hr className="border border-gray-400 my-1" />
          </div>
        }
        tms1Value={cav3Tms1}
        setTms1Value={(e) => setCav3Tms1(e.target.value)}
        tms2Value={cav3Tms2}
        setTms2Value={(e) => setCav3Tms2(e.target.value)}
        tms3Value={cav3Tms3}
        setTms3Value={(e) => setCav3Tms3(e.target.value)}
        tms4Value={cav3Tms4}
        setTms4Value={(e) => setCav3Tms4(e.target.value)}
        surfaceValue={cav3Surface}
        setSurfaceValue={(e) => setCav3Surface(e.target.value)}
        pg1Value={cav3Pg1}
        setPg1Value={(e) => setCav3Pg1(e.target.value)}
        pg2Value={cav3Pg2}
        setPg2Value={(e) => setCav3Pg2(e.target.value)}
        tms5Value={cav3Tms5}
        setTms5Value={(e) => setCav3Tms5(e.target.value)}
        dbValue={cav3Db}
        setDbValue={(e) => setCav3Db(e.target.value)}
      />
    </>
  );
};
export default Cavity3;
