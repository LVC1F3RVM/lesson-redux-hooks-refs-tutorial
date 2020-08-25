import React from 'react';
import { connect } from "react-redux";



function Show(props) {
    const {show} = props;
    
    if (!show) {
        return <div><p style={{color:"red"}}>Show not found</p></div>
    }
    const { image, name, url } = show;
    return (
        <div>
            <h3>{name}</h3>
            <img src={image.medium} alt={name}/>
            <a href={url} style={{display: "block"}}></a>
        </div>
    );
};

const mapStateToProps = (state) => ({
    show: state.show.currentShow,
});

export default connect(mapStateToProps)(Show);
