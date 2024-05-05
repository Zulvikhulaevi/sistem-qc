import { useAllStateContext } from "@/context/AllStateContext";
import KnobManL1stFormContent from "@/pages/qcsys/components/FormContent/KnobManL1st";

const Cavity2 = () => {
  const {
    cav2Db,
    cav2Pg1,
    cav2Tms1,
    cav2Tms2,
    setCav2Db,
    setCav2Pg1,
    setCav2Tms1,
    setCav2Tms2,
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
        dbValue={cav2Db}
        setDbValue={(e) => setCav2Db(e.target.value)}
        pg1Value={cav2Pg1}
        setPg1Value={(e) => setCav2Pg1(e.target.value)}
        tms1Value={cav2Tms1}
        setTms1Value={(e) => setCav2Tms1(e.target.value)}
        tms2Value={cav2Tms2}
        setTms2Value={(e) => setCav2Tms2(e.target.value)}
      />
    </>
  );
};
export default Cavity2;
