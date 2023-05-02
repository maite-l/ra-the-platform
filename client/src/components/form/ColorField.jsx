export default function ColorField({ id, label, value, onChange }) {
    return (
        <label>
            <span>{label}</span>
            <input type="color" id={id} name={id} value={value} onChange={(event) => onChange(event)} />
        </label>
    );
}