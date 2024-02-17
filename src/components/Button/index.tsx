import { ReactElement } from "react";
import { ButtonType }   from "../../context/ButtonProvider";

type PropsTypes = {
    button: ButtonType
};

const Button = ({ button }: PropsTypes): ReactElement => {
    const content = (
        <button className={button.class}>{button.text}</button>
    );

    return content;
};

export default Button;
