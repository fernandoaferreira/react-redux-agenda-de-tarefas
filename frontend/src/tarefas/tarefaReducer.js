const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TAREFA_PESQUISADA':
            return { ...state, list: action.payload.data }
        case 'LIMPAR_TAREFA':
            return { ...state, description: '' }
        default:
            return state
    }
}