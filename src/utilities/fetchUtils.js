const getRequestHeaders = () => {
    return new Headers({
        "authentication": localStorage.getItem("sessionId"),
        "Content-Type": "application/json"
    })
}

export { getRequestHeaders }