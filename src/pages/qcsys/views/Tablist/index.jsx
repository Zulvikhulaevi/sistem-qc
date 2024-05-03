import { useAllStateContext } from "@/context/AllStateContext";

const Tablist = (props) => {
  const { isTab1Active, isTab2Active } = useAllStateContext();

  return (
    <div className="w-full mx-auto mt-3">
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" onClick={props.tab1} className={props.tab1Active}>
          Cavity 1
        </a>
        <a role="tab" onClick={props.tab2} className={props.tab2Active}>
          Cavity 2
        </a>
      </div>
    </div>
  );
};
export default Tablist;
