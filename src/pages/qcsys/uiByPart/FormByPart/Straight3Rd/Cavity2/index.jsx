import { useAllStateContext } from "@/context/AllStateContext";
import Straight3RdFormContent from "@/pages/qcsys/components/FormContent/Straight3Rd";

const Cavity2 = () => {
  const {
    cav2Surface,
    cav2Db,
    cav2Pg1,
    cav2Pg2,
    cav2Tms1,
    cav2Tms2,
    cav2Tms3,
    cav2Tms4,
    cav2Tms5,
    setCav2Surface,
    setCav2Db,
    setCav2Pg1,
    setCav2Pg2,
    setCav2Tms1,
    setCav2Tms2,
    setCav2Tms3,
    setCav2Tms4,
    setCav2Tms5,
  } = useAllStateContext();

  return (
    <>
      <Straight3RdFormContent
        title={
          <div>
            <p className="text-sm text-center font-semibold">Cavity 2</p>
            <hr className="border border-gray-400 my-1" />
          </div>
        }
        tms1Value={cav2Tms1}
        setTms1Value={(e) => setCav2Tms1(e.target.value)}
        tms2Value={cav2Tms2}
        setTms2Value={(e) => setCav2Tms2(e.target.value)}
        tms3Value={cav2Tms3}
        setTms3Value={(e) => setCav2Tms3(e.target.value)}
        tms4Value={cav2Tms4}
        setTms4Value={(e) => setCav2Tms4(e.target.value)}
        surfaceValue={cav2Surface}
        setSurfaceValue={(e) => setCav2Surface(e.target.value)}
        pg1Value={cav2Pg1}
        setPg1Value={(e) => setCav2Pg1(e.target.value)}
        pg2Value={cav2Pg2}
        setPg2Value={(e) => setCav2Pg2(e.target.value)}
        tms5Value={cav2Tms5}
        setTms5Value={(e) => setCav2Tms5(e.target.value)}
        dbValue={cav2Db}
        setDbValue={(e) => setCav2Db(e.target.value)}
      />
    </>
  );
};
export default Cavity2;
