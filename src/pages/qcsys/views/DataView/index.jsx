import DataTable from "./DataTable";

const { default: Header } = require("./Header");

const DataView = () => {
  return (
    <div className="container w-2/3 border border-2 rounded-lg px-2 mx-3">
      <Header />
      <hr className="border mt-1 mb-3 mx-2" />
      <DataTable />
    </div>
  );
};
export default DataView;
