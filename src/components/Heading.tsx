import { FC, useMemo } from 'react';


type Props = {
  size: number;
  value: string;
}

export const Heading: FC<Props> = ({ size, value }) => {
  const type = useMemo(() => {
    switch (size) {
      case 1:
        return <h1>{value}</h1>
      case 2:
        return <h2>{value}</h2>
      case 3:
        return <h3>{value}</h3>
      case 4:
        return <h4>{value}</h4>
      case 5:
        return <h5>{value}</h5>
      case 6:
        return <h6>{value}</h6>
      default:
        return null
    }
  }, [size, value])
  return <>{type}</>
};

