import React from 'react';

function Star(props) {
    let rating = Math.ceil(props.rating || 0)
    return (
        <div>
            {
                [1, 2, 3, 4, 5].map(function (item, index) {
                    return <span className='fa fa-star' key={''+index} style={index<rating ? {color : 'green' } : {}}></span>
                })
            }
        </div>
    )
}

export default Star;