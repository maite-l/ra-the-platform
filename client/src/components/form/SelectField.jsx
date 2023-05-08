export default function SelectField({ id, label, options, value, onChange }) {
    return (
            <label>
                <span>{label}</span>
                <select
                    name={id}
                    id={id}
                    value={value}
                    onChange={(event) => onChange(event)}
                >
                    <SelectOptions options={options} />
                </select>
            </label>
    );
}

export function SelectOptions({ options }) {
    return (
        options.map((option) => {
            let value = option.name.replace(/[\s]/g, '-').replace(/[\s()]/g, '');
            if (value === '---') {
                value = '';
            };
            return (
                <option key={option.id} value={value}>
                    {option.name}
                </option>
            );
        })
    );
}
