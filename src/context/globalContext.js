import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	// const [state, setState] = useState(true);

	// const setStatee = () => {
	// 	setState(!state);
	// };

	return (
		<GlobalContext.Provider value={{/* state, setStatee */}}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
