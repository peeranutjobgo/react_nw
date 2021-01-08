import React from 'react';

// function DisplaySeason(props) {
const  DisplaySeason = (props) => {    
    const season = props.season
    return (
        <div>
            <p>
                <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> สถานะ: </dt>
                <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{season}</dd>
            </p>
        </div>
    );
}

export default DisplaySeason;