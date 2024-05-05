const Tab4List = (props) => {
  return (
    <div className="w-full mx-auto mt-3">
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" onClick={props.tab1onClick} className={props.tab1Class}>
          Cavity 1
        </a>
        <a role="tab" onClick={props.tab2onClick} className={props.tab2Class}>
          Cavity 2
        </a>
        <a role="tab" onClick={props.tab3onClick} className={props.tab3Class}>
          Cavity 3
        </a>
        <a role="tab" onClick={props.tab4onClick} className={props.tab4Class}>
          Cavity 4
        </a>
      </div>
    </div>
  );
};
export default Tab4List;
