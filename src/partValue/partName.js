import { useAllStateContext } from "@/context/AllStateContext";

export function useKnobManL1st() {
  const {
    cav1pg,
    cav2pg,
    cav1Tms1,
    cav1Tms2,
    cav2Tms1,
    cav2Tms2,
    pointPg,
    pointTms1,
    pointTms2,
  } = useAllStateContext();

  return {
    pointPg: pointPg,
    pointTms1: pointTms1,
    pointTms2: pointTms2,
    cav1pg: cav1pg,
    cav1Tms1: cav1Tms1,
    cav1Tms2: cav1Tms2,
    cav2pg: cav2pg,
    cav2Tms1: cav2Tms1,
    cav2Tms2: cav2Tms2,
  };
}
