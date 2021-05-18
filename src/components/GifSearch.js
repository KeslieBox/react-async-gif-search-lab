import React, {Component} from 'react'

export default class GifSearch extends Component {
  
        state = {
            query: ""
        }
    

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    handleInput(e){
        e.preventDefault()
        this.setState({
            query: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type='text' value={this.state.query} onChange={ e => this.handleInput(e)}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}