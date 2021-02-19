import react, { Component } from 'react'
import Graph from '../../componentes/graph';
import Table from '../../componentes/Table_simul';

class PostForm extends Component{
    async postData(email){
        if (email !== ''){
            try{
            const response = await fetch('http://localhost:5000/consulta_simulacoes', {
                method: 'post',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                email: email,
                })
            }).then(response => response.json());
            return (response)
            }catch(e){
            console.log(e)
            }
        }
        else{
            alert("preencha todos os campos")
            return false
        }
      }
    
    constructor(props){
        super(props)
        
        this.state = {
            nome: '',
            telefone: '',
            email: '',
            senha: '',
            quantidade: '',
            tempo: '',
            json_response: {'simulacoes': []},
            rendimento_poup: '',
            rendimento_cdb: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async e => {
        e.preventDefault()
        const response = await this.postData(this.state.email)
        if (response !== false){
            this.setState({json_response: response})
        }
    }

    render(){
        const {nome, telefone, email, senha, quantidade, tempo} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder="Digite seu email" type='text' name='email' value={email} onChange={this.changeHandler}/>
                    </div>
                    <button class='button' type='submit'>Submit</button>
                    <div class="container">
                        <Table json={this.state.json_response}/>
                    </div>
                </form>
            </div>
        )
    }
}



export default PostForm