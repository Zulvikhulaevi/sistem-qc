import { useAllStateContext } from "@/context/AllStateContext";
import KnobManL1stFormContent from "@/pages/qcsys/components/FormContent/KnobManL1st";

const Cavity2 = () => {
  const {
    pointPg,
    pointTms1,
    pointTms2,
    cav2pg,
    cav2Tms1,
    cav2Tms2,
    setCav2pg,
    setCav2Tms1,
    setCav2Tms2,
    setPointPg,
    setPointTms1,
    setPointTms2,
  } = useAllStateContext();

  return (
    <>
      <KnobManL1stFormContent
        title={
          <div>
            <p className="text-sm text-center font-semibold">Cavity 2</p>
            <hr className="border border-gray-400 my-1" />
          </div>
        }
        pointPgValue={pointPg}
        setPointPgValue={(e) => setPointPg(e.target.value)}
        pointTms1Value={pointTms1}
        setPointTms1Value={(e) => setPointTms1(e.target.value)}
        pointTms2Value={pointTms2}
        setPointTms2Value={(e) => setPointTms2(e.target.value)}
        pgValue={cav2pg}
        setPgValue={(e) => setCav2pg(e.target.value)}
        tms1Value={cav2Tms1}
        setTms1Value={(e) => setCav2Tms1(e.target.value)}
        tms2Value={cav2Tms2}
        setTms2Value={(e) => setCav2Tms2(e.target.value)}
      />
    </>
  );
};
export default Cavity2;
