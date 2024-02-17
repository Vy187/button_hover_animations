import { createContext, ReactElement, useState } from "react";

export type ButtonType = {
    id      : number,
    class   : string,
    text    : string
};

const initialState: ButtonType[] = [
    {
        'id'    : 1,
        'class' : 'btn btn-border-pop',
        'text'  : 'Border Pop'
    },
    {
        'id'    : 2,
        'class' : 'btn btn-background-slide',
        'text'  : 'Background Slide'
    },
    {
        'id'    : 3,
        'class' : 'btn btn-background-circle',
        'text'  : 'Background Circle'
    },
    {
        'id'    : 4,
        'class' : 'btn btn-border-underline',
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
