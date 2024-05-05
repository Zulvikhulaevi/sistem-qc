import { useAllStateContext } from "@/context/AllStateContext";
import KnobManL1stFormContent from "@/pages/qcsys/components/FormContent/KnobManL1st";

const Cavity1 = () => {
  const {
    cav1Db,
    cav1Pg1,
    cav1Tms1,
    cav1Tms2,
    setCav1Db,
    setCav1Pg1,
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
        dbValue={cav1Db}
        setDbValue={(e) => setCav1Db(e.target.value)}
        pg1Value={cav1Pg1}
        setPg1Value={(e) => setCav1Pg1(e.target.value)}
        tms1Value={cav1Tms1}
        setTms1Value={(e) => setCav1Tms1(e.target.value)}
        tms2Value={cav1Tms2}
        setTms2Value={(e) => setCav1Tms2(e.target.value)}
      />
    </>
  );
};
export default Cavity1;
