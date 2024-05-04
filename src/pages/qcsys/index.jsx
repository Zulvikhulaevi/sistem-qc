import FormView from "./views/FormView";
import DataView from "./views/DataView";
import { useEffect } from "react";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useSession } from "next-auth/react";

const QcSys = () => {
  const { data: session } = useSession();
  const { getAllData } = useDataFunctionContext();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

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
