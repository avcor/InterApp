import { FC, ReactNode, createContext, useState } from "react";

interface NameProviderProps {
    children: ReactNode;
}

type NameContextProps = { value: any, updateValue: any }

export const NameContext = createContext<NameContextProps>({
    value: 'Empty',
    updateValue: () => { },
});

const NameProvider: FC<NameProviderProps> = ({ children }) => {
    const [nameVal, setNameval] = useState('Empty');

    return (
        <NameContext.Provider value={{ value: nameVal, updateValue: setNameval }}>
            {children}
        </NameContext.Provider>
    )
}

export default NameProvider;
