import React from 'react';

const ErrorMessage = ({ error, message, field, isNewMessage }) => {
    return (
        <>
            {error ? (
                <>
                    {field in message ? (
                        <div className={`${isNewMessage ? "error-new-msg" : "error-blog-msg"}`} >
                            {message[field]}
                        </div>
                    ) : <></>}
                </>
            ) : <></>}

        </>
    );
};

export default ErrorMessage;