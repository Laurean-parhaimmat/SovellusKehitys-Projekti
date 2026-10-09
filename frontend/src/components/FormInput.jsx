import { useState } from "react";

export default function FormInput(props) {
  const { label, type = "text", name, value, onChange } = props;

  /*
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  }; */

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
}
