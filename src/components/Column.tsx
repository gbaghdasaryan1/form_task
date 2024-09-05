import { FC, ReactNode } from "react";


type Props = {
    children: ReactNode;
    size: number
}

export const Column:FC<Props> = ({children,size}) => {
    return(
        <div className={`col-${size}`}>{children}</div>
    )
}