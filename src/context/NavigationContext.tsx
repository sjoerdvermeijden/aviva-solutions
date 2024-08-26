import React, {
    useState,
    Dispatch,
    SetStateAction,
    createContext,
} from "react";

type Props = {
    children: React.ReactNode;
};

type ToggleContextProps = {
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
};

const ToggleContextState = {
    toggle: false,
    setToggle: () => { },
};

export const ToggleContext = createContext<ToggleContextProps>(ToggleContextState);

export function ToggleComponent({ children }: Props) {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <>{children}</>
        </ToggleContext.Provider>
    );
}

export default ToggleComponent;