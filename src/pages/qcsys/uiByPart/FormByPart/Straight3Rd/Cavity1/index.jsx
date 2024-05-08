import { useAllStateContext } from "@/context/AllStateContext";
import Straight3RdFormContent from "@/pages/qcsys/components/FormContent/Straight3Rd";

const Cavity1 = () => {
  const {
    cav1Surface,
    cav1Db,
    cav1Pg1,
    cav1Pg2,
    cav1Tms1,
    cav1Tms2,
    cav1Tms3,
    cav1Tms4,
    cav1Tms5,
    setCav1Surface,
    setCav1Db,
    setCav1Pg1,
    setCav1Pg2,
    setCav1Tms1,
    setCav1Tms2,
    setCav1Tms3,
    setCav1Tms4,
    setCav1Tms5,
  } = useAllStateContext();

  return (
    <>
      <Straight3RdFormContent
        title={
          <div>
            <p className="text-sm text-center font-semibold">Cavity 1</p>
            <hr className="border border-gray-400 my-1" />
          </div>
        }
        tms1Value={cav1Tms1}
        setTms1Value={(e) => setCav1Tms1(e.target.value)}
        tms2Value={cav1Tms2}
        setTms2Value={(e) => setCav1Tms2(e.target.value)}
        tms3Value={cav1Tms3}
        setTms3Value={(e) => setCav1Tms3(e.target.value)}
        tms4Value={cav1Tms4}
        setTms4Value={(e) => setCav1Tms4(e.target.value)}
        surfaceValue={cav1Surface}
        setSurfaceValue={(e) => setCav1Surface(e.target.value)}
        pg1Value={cav1Pg1}
        setPg1Value={(e) => setCav1Pg1(e.target.value)}
        pg2Value={cav1Pg2}
        setPg2Value={(e) => setCav1Pg2(e.target.value)}
        tms5Value={cav1Tms5}
        setTms5Value={(e) => setCav1Tms5(e.target.value)}
        dbValue={cav1Db}
        setDbValue={(e) => setCav1Db(e.target.value)}
      />
    </>
  );
};
export default Cavity1;
