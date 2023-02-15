function Heading(props){
    return(
        <div className="heading">
            <div className="headingOverlay">
                <h2>{props.children}</h2>
            </div>
            <div className="headingImage">
                <img src={props.Image} alt={props.Alt}></img>
            </div>
        </div>
    )
};

export default Heading;