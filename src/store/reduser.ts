export const sum = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;
export const mul = (a: number, b: number) => a * b;
export const div = (a: number, b: number) => a / b;


export type ActionType = {
    type: 'SUM' | 'MULTIPLY' | 'DIVIDE' | 'SUBTRACT'
    number: number
}

export const calculator = (state: number, action: ActionType) => {
    switch (action.type) {
        case 'SUM': {
            return state + action.number;
        }
        case 'SUBTRACT': {
            return state - action.number;
        }
        case 'MULTIPLY': {
            return state * action.number;
        }
        case 'DIVIDE': {
            return state / action.number;
        }
        default:
            return state;
    }
}