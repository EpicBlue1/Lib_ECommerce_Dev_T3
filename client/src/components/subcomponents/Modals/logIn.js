import React from 'react';

const LogIn = (props) => {

    return (
    <div className={props.show? 'log-container' : 'log-container del-blur'}>
        <div className={props.show? 'modal-log' : 'modal-log model-grow'}>
            
        </div>
    </div>
    );
};

export default LogIn;