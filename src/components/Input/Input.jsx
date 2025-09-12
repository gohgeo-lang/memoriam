import "./Input.css";

export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input className="input-field" type={type} {...props} />
    </div>
  );
}
