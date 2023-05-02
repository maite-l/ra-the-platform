export default function TextInputField({ id, label, value, onChange }) {
    return (
        <label>
            <span>{label}</span>
            <input type="text" id={id} name={id} value={value} onChange={(event) => onChange(event)} />
        </label>
    );
}