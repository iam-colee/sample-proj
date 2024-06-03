const PickFile = ({ ...props }) => {
    return ( 
        <label className="ds-form-control w-full">
            <div className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </div>
            <input type="file" className="ds-file-input ds-file-input-accent w-full" />
        </label>
    );
}

export default PickFile;