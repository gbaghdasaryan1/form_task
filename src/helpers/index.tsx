import { Fragment } from "react/jsx-runtime";
import { Block } from "../components/Block";
import { Checkbox } from "../components/Checkbox";
import { Column } from "../components/Column";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Paragraph } from "../components/Paragraph";
import { Row } from "../components/Row";

export const renderElements = (elements: Record<string, never>[]) => {
    return elements?.map((element, index) => (
      <Fragment key={index}>
        {renderElement(element)}
      </Fragment>
    ));
  };

export const renderElement = (element: Record<string, never>) => {
    const { type, size, value, columns, elements, name, required, label, validator } = element;
    switch (element.type) {
      case 'block':
        return <Block>{renderElements(elements)}</Block>;
      case 'heading':
        return <Heading size={size} value={value} />;
      case 'paragraph':
        return <Paragraph value={value} />;
      case 'row':
        return <Row>{renderElements(columns)}</Row>;
      case 'column':
        return <Column size={size}>{renderElements(elements)} </Column>;
      case 'checkbox':
        return <Checkbox label={label} name={name} required={required} value={value} type={type} />;
        case 'submit':
        return <button type={type} name={name}>{label}</button>;
      case 'input':
        return (
          <Input
            name={name}
            label={label}
            required={required}
            validator={validator[0]}
          />
        );
      default:
        return null;
    }
  };
