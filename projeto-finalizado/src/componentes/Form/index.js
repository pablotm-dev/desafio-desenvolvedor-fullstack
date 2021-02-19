import react, { Component } from 'react'
import Graph from '../../componentes/graph';

class PostForm extends Component{
    async postData(nome, email, telefone, senha, quantidade, tempo){
        if (nome !== '' && email !== '' && telefone !== '' && senha !== '' && quantidade !== '' && tempo !== ''){
            try{
            const response = await fetch('http://localhost:5000/simulacao', {
                method: 'post',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                nome: nome,
                email: email,
                telefone: telefone,
                senha_acesso: senha,
                quantidade: quantidade,
                tempo_investimento: tempo
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
            json_response: '',
            rendimento_poup: '',
            rendimento_cdb: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async e => {
        e.preventDefault()
        const response = await this.postData(this.state.nome, this.state.email, this.state.telefone, this.state.senha, this.state.quantidade, this.state.tempo)
        if (response !== false){
            this.setState({json_response: response})
            var ultimo_poup = this.state.json_response.valores_poupanca.slice(-1)[0]
            var ultimo_cdb = this.state.json_response.valores_cdb.slice(-1)[0]
            this.setState({rendimento_poup: (ultimo_poup - this.state.quantidade)})
            this.setState({rendimento_cdb: (ultimo_cdb - this.state.quantidade)})
        }
    }

    render(){
        const {nome, telefone, email, senha, quantidade, tempo} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder="Digite seu nome" type='text' name='nome' value={nome} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder="Digite seu telefone" type='text' name='telefone' value={telefone} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder="Digite seu email" type='text' name='email' value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder="Digite uma senha" type='text' name='senha' value={senha} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder="Investimento inicial" type='text' name='quantidade' value={quantidade} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder="Tempo do investimento" type='text' name='tempo' value={tempo} onChange={this.changeHandler}/>
                    </div>
                    <button class='button' type='submit'>Submit</button>
                    <div class="container">
                        <div id='t1' class="op2"><Graph json={this.state.json_response}/></div>
                        <h2 className="titulo-sessao">Investindo na poupança voce teria um rendimento de: R${this.state.rendimento_poup}</h2>
                        <h2 className="titulo-sessao">Investindo no CDB voce teria um rendimento de: <b> R${this.state.rendimento_cdb}</b></h2>
                    </div>
                </form>
            </div>
        )
    }
}



export default PostForm