import React from 'react';
import axios from 'axios';

const DeletePop = (props) => {

    const setRender = props.setRender

    const hide = () => {
        props.setShow(true)
    }

    const delUser = () => {
        console.log(props.id);

        props.setShow(true)

        axios.delete(`http://localhost:2000/api/delUser/${props.id}`)
        .then((res) => {
          console.log("deleted " + props.username);
          setRender(prev => !prev);
        })
        .catch(function (err) {console.log(err)})
    }

    return (
    <div className={props.show? 'del-container' : 'del-container del-blur'}>
        <div className={props.show? 'modal-del' : 'modal-del model-grow'}>
            <h1>Are you sure you want to delete {props.username}?</h1>
            <div onClick={delUser} className={props.show? 'Confirm-del' : 'Confirm-del del-opacity'}>Yes</div>
            <div onClick={hide} className={props.show? 'Deny-del' : 'Deny-del del-opacity'}>Cancel</div>
        </div>
    </div>
    );
};

export default DeletePop;