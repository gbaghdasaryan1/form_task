import { FC, ReactNode } from "react";

type Props = {
   children: ReactNode
}

export const Block:FC<Props> = ({children}) => {
   
    return <div className="block">{children}</div>
}