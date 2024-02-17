import { ReactElement } from "react";
import useButtons   from "../../hooks/useButtons";
import Button       from "../Button";
import './styles.css';

const ButtonList = () => {
    const { buttons } = useButtons();

    let pageContent: ReactElement | ReactElement[] = buttons.map(button => {
        return (
            <Button
                key={button.id}
                button={button}
            />
        )
    });

    const content = (
        <main className="main">
            {pageContent}
        </main>
    );

    return content;
};

export default ButtonList;
