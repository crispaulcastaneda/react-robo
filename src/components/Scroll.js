import React from 'react';

const Scroll = (props) => {
    return(
        // style = {{}} - first bracket is for JSX, the second one is for returning an OBJECT
        <div style={{ overflow: 'scroll', border: '4px solid #111', height: '800px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;