import React from 'react'
//CONECTA O COMPONENTE COM OS DADOS DA STORE
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './tarefaAction'

const TarefasList = props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.done ? 'markedAsDone' : ''}>
                    {tarefa.description}
                </td>
                <td>
                    <IconButton style='success' icon='check' onClick={() => props.markAsDone(tarefa)}
                        hide={tarefa.done}>
                    </IconButton>
                </td>
                <td>
                    <IconButton style='warning' icon='undo' onClick={() => props.markAsPending(tarefa)}
                        hide={!tarefa.done}>
                    </IconButton>
                </td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClick={() => props.remove(tarefa)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Confirma</th>
                    <th>Pendente</th>
                    <th>Deletar</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.tarefa.list })
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TarefasList)