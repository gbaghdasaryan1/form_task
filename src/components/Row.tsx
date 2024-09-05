import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Row:FC<Props> = ({children}) => {

    return <div className="row">
        {children}
    </div>
}