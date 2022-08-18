import React from "react";

const MyContext = React.createContext({
    data: '',
    eventChange: () => {}
})

export default MyContext;
