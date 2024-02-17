import { useContext }               from "react";
import { UseButtonsContextType }    from "../context/ButtonProvider";
import ButtonsContext               from "../context/ButtonProvider";

const useButtons = (): UseButtonsContextType => {
    return useContext(ButtonsContext);
};

export default useButtons;
