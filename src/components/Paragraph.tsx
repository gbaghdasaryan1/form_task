import { FC } from "react";

type Props = {
    value: string
}

export const Paragraph:FC<Props> = ({value}) => {

    return <p>{value}</p>
}