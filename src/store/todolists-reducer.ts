import { FilterValuesType } from '../App';
import { v1 } from 'uuid';

export type RemoveTodoListAT = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddTodoListAT = {
    type: 'ADD-TODOLIST'
    todoListID: string
    title: string
}

type ChangeTodolistTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string,
    id: string
}
export type TodoListType = {
    id: string,
    title: string,
    filter: FilterValuesType,
}

type ChangeFinterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    id: string
}
export let todolistID1 = v1();
export let todolistID2 = v1();
export let todolistID3 = v1();

let initialState: Array<TodoListType> = [
    { id: todolistID1, title: 'What should I do before new year', filter: 'all' },
    { id: todolistID2, title: 'What to learn?', filter: 'all' },
    { id: todolistID3, title: 'What to buy?', filter: 'all' },
]

export type AllACType = ChangeFinterAT | ChangeTodolistTitleAT | AddTodoListAT | RemoveTodoListAT;


export const RemoveTodolistAC = (id: string): RemoveTodoListAT => {
    return { type: 'REMOVE-TODOLIST', id }
}

export const AddTodoListAC = (title: string): AddTodoListAT => {
    return { type: 'ADD-TODOLIST', todoListID: v1(), title }
}

export const ChangeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleAT => {
    return { type: 'CHANGE-TODOLIST-TITLE', id, title }
}

export const ChangeFinterAC = (id: string, filter: FilterValuesType): ChangeFinterAT => {
    return { type: 'CHANGE-TODOLIST-FILTER', id, filter }
}

export const todolistsReducer = (todoLists = initialState, action: AllACType): Array<TodoListType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todoLists.filter(t => t.id !== action.id);
        case 'ADD-TODOLIST':
            const newTodoList: TodoListType = {
                id: action.todoListID,
                title: action.title,
                filter: 'all'
            }
            return ([...todoLists, newTodoList])

        case 'CHANGE-TODOLIST-TITLE':
            return todoLists.map(t => t.id === action.id ?
                { ...t, title: action.title } : t);

        case 'CHANGE-TODOLIST-FILTER':
            return todoLists.map(t => t.id === action.id ? { ...t, filter: action.filter } : t)

        default:
            return todoLists;
    }

}