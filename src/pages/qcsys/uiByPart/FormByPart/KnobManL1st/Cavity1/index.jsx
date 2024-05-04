import { useAllStateContext } from "@/context/AllStateContext";
import KnobManL1stFormContent from "@/pages/qcsys/components/FormContent/KnobManL1st";

const Cavity1 = () => {
  const {
    pointPg,
    pointTms1,
    pointTms2,
    cav1pg,
    cav1Tms1,
    cav1Tms2,
    setPointPg,
    setPointTms1,
    setPointTms2,
    setCav1pg,
    setCav1Tms1,
    setCav1Tms2,
  } = useAllStateContext();

  return (
    <>
      <KnobManL1stFormContent
        title={
          <div>
            <p className="text-sm text-center font-semibold">Cavity 1</p>
            <hr className="border border-gray-400 my-1" />
          </div>
        }
        pointPgValue={pointPg}
        setPointPgValue={(e) => setPointPg(e.target.value)}
        pointTms1Value={pointTms1}
        setPointTms1Value={(e) => setPointTms1(e.target.value)}
        pointTms2Value={pointTms2}
        setPointTms2Value={(e) => setPointTms2(e.target.value)}
        pgValue={cav1pg}
        setPgValue={(e) => setCav1pg(e.target.value)}
        tms1Value={cav1Tms1}
        setTms1Value={(e) => setCav1Tms1(e.target.value)}
        tms2Value={cav1Tms2}
        setTms2Value={(e) => setCav1Tms2(e.target.value)}
      />
    </>
  );
};
export default Cavity1;
