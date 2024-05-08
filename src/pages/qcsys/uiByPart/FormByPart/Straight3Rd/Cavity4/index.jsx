import { useAllStateContext } from "@/context/AllStateContext";
import Straight3RdFormContent from "@/pages/qcsys/components/FormContent/Straight3Rd";

const Cavity4 = () => {
  const {
    cav4Surface,
    cav4Db,
    cav4Pg1,
    cav4Pg2,
    cav4Tms1,
    cav4Tms2,
    cav4Tms3,
    cav4Tms4,
    cav4Tms5,
    setCav4Surface,
    setCav4Db,
    setCav4Pg1,
    setCav4Pg2,
    setCav4Tms1,
    setCav4Tms2,
    setCav4Tms3,
    setCav4Tms4,
    setCav4Tms5,
  } = useAllStateContext();

  return (
    <>
      <Straight3RdFormContent
        title={
          <div>
            <p className="text-sm text-center font-semibold">Cavity 4</p>
            <hr className="border border-gray-400 my-1" />
          </div>
        }
        tms1Value={cav4Tms1}
        setTms1Value={(e) => setCav4Tms1(e.target.value)}
        tms2Value={cav4Tms2}
        setTms2Value={(e) => setCav4Tms2(e.target.value)}
        tms3Value={cav4Tms3}
        setTms3Value={(e) => setCav4Tms3(e.target.value)}
        tms4Value={cav4Tms4}
        setTms4Value={(e) => setCav4Tms4(e.target.value)}
        surfaceValue={cav4Surface}
        setSurfaceValue={(e) => setCav4Surface(e.target.value)}
        pg1Value={cav4Pg1}
        setPg1Value={(e) => setCav4Pg1(e.target.value)}
        pg2Value={cav4Pg2}
        setPg2Value={(e) => setCav4Pg2(e.target.value)}
        tms5Value={cav4Tms5}
        setTms5Value={(e) => setCav4Tms5(e.target.value)}
        dbValue={cav4Db}
        setDbValue={(e) => setCav4Db(e.target.value)}
      />
    </>
  );
};
export default Cavity4;
