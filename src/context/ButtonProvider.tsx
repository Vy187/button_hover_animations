import { createContext, ReactElement, useState } from "react";

export type ButtonType = {
    id      : number,
    class   : string,
    text    : string
};

const initialState: ButtonType[] = [
    {
        'id'    : 1,
        'class' : 'button button-border-pop',
        'text'  : 'Border Pop'
    },
    {
        'id'    : 2,
        'class' : 'button button-background-slide',
        'text'  : 'Background Slide'
    },
    {
        'id'    : 3,
        'class' : 'button button-background-circle',
        'text'  : 'Background Circle'
    },
    {
        'id'    : 4,
        'class' : 'button button-border-underline',
        'text'  : 'Border Underline'
    }
];

export type UseButtonsContextType = { buttons: ButtonType[] };

const initialContextState: UseButtonsContextType = { buttons: [] };

const ButtonsContext = createContext<UseButtonsContextType>(initialContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ButtonsProvider = ({ children }: ChildrenType): ReactElement => {
    const [buttons] = useState<ButtonType[]>(initialState);

    return (
        <ButtonsContext.Provider value={{ buttons }}>
            {children}
        </ButtonsContext.Provider>
    );
};

export default ButtonsContext;
