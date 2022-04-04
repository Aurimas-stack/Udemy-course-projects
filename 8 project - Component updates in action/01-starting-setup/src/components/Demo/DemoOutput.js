import React from "react";

const DemOutput = props => {
    return  <p>{props.show ? "This is new" : ""}</p>;
};

export default React.memo(DemOutput);