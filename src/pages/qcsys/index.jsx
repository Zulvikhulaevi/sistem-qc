import FormView from "./views/formView";
import DataView from "./views/DataView";
import Container from "@/components/Layout/Container";
import { useEffect } from "react";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useSession } from "next-auth/react";

const QcSys = () => {
  const { data: session } = useSession();
  const { getLastDoc, getAllData } = useDataFunctionContext();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className="mt-3">
      <Container
        content={
          <>
            <FormView />
            <DataView />
          </>
        }
      />
    </div>
  );
};
export default QcSys;
