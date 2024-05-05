import FormView from "./views/FormView";
import DataView from "./views/DataView";
import { useEffect, useState } from "react";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useSession } from "next-auth/react";
import { useAllStateContext } from "@/context/AllStateContext";

const QcSys = () => {
  const { data: session } = useSession();
  const { partName, dateNow } = useAllStateContext();
  const { getAllData } = useDataFunctionContext();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partName]);

  return (
    <div className="mt-3">
      <div className="flex w-full">
        <FormView />
        <DataView />
      </div>
    </div>
  );
};
export default QcSys;
