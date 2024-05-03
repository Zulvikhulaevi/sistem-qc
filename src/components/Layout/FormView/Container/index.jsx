const FormViewContainer = (props) => {
  return (
    <div className="container w-1/3 min-h-96 border border-2 rounded-lg ms-2 px-3">
      {props.content}
    </div>
  );
};
export default FormViewContainer;
