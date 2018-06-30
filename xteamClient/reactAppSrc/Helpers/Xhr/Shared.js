'use strict';

/**
 *  Shared Xhr abstractions.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

const successMsg = (what, onSuccessMsg) => {
    return what + ' successful: ' + onSuccessMsg + '!'
};

const failMsg = (what, onFailMsg) => {
    return what + ' failed: ' + onFailMsg + '!'
};

export const errMsg = (what, ex) => {
    return  what + ' encountered an exception: ' + ex + '!'
};

export const restListener = (res, rej, what, onSuccessMsg, onFailMsg) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(successMsg(what, onSuccessMsg));
                res(xhr.response);
            }
            else {
                console.log(failMsg(what, onFailMsg));
                rej(xhr.response)
            }
        }
    };

    return xhr;
};