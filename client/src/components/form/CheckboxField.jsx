export default function CheckboxField({ label, options, onChange }) {
    return (
        <fieldset>
            <legend>{label}</legend>
            <CheckboxOptions options={options} onChange={(event) => onChange(event)} />
        </fieldset>
    );
}

export function CheckboxOptions({ options, onChange }) {

    return (
        options.map((option) => {
            const value = option.name.replace(/[\s]/g, '-').replace(/[\s()]/g, '');
            return (
                <label key={option.id} className="checkbox-inputs">
                    <input type="checkbox"
                        name={option.id}
                        id={option.id}
                        value={value}
                        checked={option.checked}
                        onChange={(event) => onChange(event)}
                    />
                    <span>{option.name}</span>
                </label>
            )
        })
    );
}

