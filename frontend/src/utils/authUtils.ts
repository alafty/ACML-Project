const setToken = (token: string) => {
    localStorage.setItem("token", token);
}

/// To use token, use as follows:
/// ```
/// config = { 
///     headers: { 
///         ...getTokenHeader() 
///     } 
/// }
/// ```
/// Then use the config in axios normally
const getTokenHeader = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` }
}

export {setToken, getTokenHeader}