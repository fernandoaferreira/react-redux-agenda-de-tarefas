import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasList from './tarefasList'

const URL = 'http://localhost:3005/api/tarefas'

export default class Tarefas extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description ='') {
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(tarefa) {
        axios.delete(`${URL}/${tarefa._id}`)
            .then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleMarkAsDone(tarefa) {
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, done: true })
            .then(resp => this.refresh())
    }

    handleMarkAsPending(tarefa) {
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, done: false })
            .then(resp => this.refresh())
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TarefasForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                     />
                <br></br>
                <TarefasList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
} 