const SelectForm = ({ ...props }) => {
    return ( 
        <div className="ds-form-control w-full">
            <label className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </label>

            <select className="ds-select">
                <option defaultValue={''} disabled selected>Pick one</option>
                <option defaultValue={'Star Wars'}>Star Wars</option>
                <option defaultValue={'Harry Potter'}>Harry Potter</option>
                <option defaultValue={'Lord of the Rings'}>Lord of the Rings</option>
                <option defaultValue={'Planet of the Apes'}>Planet of the Apes</option>
                <option defaultValue={'Star Trek'}>Star Trek</option>
            </select>

            <label className="ds-label">
                <span className="ds-label-text-alt text-tertiary">{props.message}</span>
            </label>
        </div>
    );
}

export default SelectForm;