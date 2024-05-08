import FormView from "./views/FormView";
import DataView from "./views/DataView";
import { useEffect } from "react";
import { useDataFunctionContext } from "@/context/DataFunctionContext";
import { useAllStateContext } from "@/context/AllStateContext";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const QcSys = () => {
  const router = useRouter();
  const { partName } = useAllStateContext();
  const { getAllData } = useDataFunctionContext();
  const { data: session } = useSession();

  const checkAuth = async () => {
    const session = await getSession();
    if (!session) {
      router.push("/");
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

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
