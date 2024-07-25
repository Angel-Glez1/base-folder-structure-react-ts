
import React from "react";

export interface IWhenProps {
    children: JSX.Element[] | JSX.Element;
    predicate?: boolean;
}

const When: React.FC<IWhenProps> = ({ children, predicate }) => {
    return !predicate ? <></> : <>{children}</>;
};

export { When };
