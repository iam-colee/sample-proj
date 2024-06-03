const Textarea = ({ ...props }) => {
    return ( 
        <div className="ds-form-control w-full">
            <label className="ds-label">
                <span className="ds-label-text capitalize">{props.title}</span>
            </label>

            <textarea
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                className="ds-textarea ds-textarea-bordered h-20 resize-none">
            </textarea>
        </div>
    );
}

export default Textarea;