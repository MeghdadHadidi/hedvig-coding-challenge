import { Peril, ReducerAction, StateModel } from "./types"

export default function(state: StateModel, action: ReducerAction): StateModel {
    switch (action.type) {
        case 'SET_PERILS':
            state.perils = action.payload as Peril[]
        default:
            return state
    }
}