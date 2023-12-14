// make context for filter
import { createContext } from "react";

export const FilterContext = createContext();

// export const FilterProvider = FilterContext.Provider;

// export const FilterConsumer = FilterContext.Consumer;

export function FilterProvider({ children }) {}

export default FilterContext;
