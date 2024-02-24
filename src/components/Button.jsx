function Button(props) {
    const className=  props.className;
    return(
        <div>
            <button onClick={()=>alert("clicked")} className={className ? className: "py-3 w-[250px] my-6 mx-auto text-[#161522] bg-[#00df9a] rounded-lg duration-150 hover:bg-[#39c79a] font-medium"}>
                {props.text}
                </button>
        </div>
    );
}
export default Button