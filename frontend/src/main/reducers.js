import { combineReducers } from 'redux'
import tarefaReducer from '../tarefas/tarefaReducer'

// RESPONSAVEL POR RETORNAR O ESTADO ATUALIZADO, 
// SEMPRE HOUVER UMA ACTION RETORNAR UM OBJETO NOVO

const rootReducer = combineReducers({
    tarefa: tarefaReducer
})

export default rootReducer