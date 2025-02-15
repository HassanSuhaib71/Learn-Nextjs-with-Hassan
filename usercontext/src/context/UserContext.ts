import { createContext } from "react";
import { MyCustomType } from "../../types";


export const UserContext = createContext<MyCustomType | undefined>(undefined);