export default function Input(props) {
  return (
    <div className="inp">
      <label>{props.label}</label>
      <input
        type="text"
        name="input"
        value={props.text}
        onChange={props.handleChange}
      />
    </div>
  );
}
