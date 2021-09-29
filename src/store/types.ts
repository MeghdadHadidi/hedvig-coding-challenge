import { ReactChild } from 'react'

type Variant = {
    [key:string]: {
        svgUrl: string
    }
}

export type Peril = {
    title: string;
    description: string;
    shortDescription: string;
    covered: string[];
    exceptions: string[];
    info: string;
    icon: {
        variants: Variant
    }
}

export type Reducer = (
    state: StateModel, 
    action: ReducerAction
) => StateModel

export interface StateModel {
    perils: Peril[]
}

export interface ReducerAction {
    type: string;
    payload: unknown;
}

export interface StoreProviderProps {
    children: ReactChild;
    reducer: Reducer;
    initialState: StateModel
}
