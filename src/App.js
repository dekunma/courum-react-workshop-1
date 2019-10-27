import React from 'react'
import Button from './Components/Button'
import Grid from '@material-ui/core/Grid';
import './CSS/style.css'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text : "",
      submitted:[],
    }
    this.changeText = this.changeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeText(){
    this.setState({text:"Goodbye"})
  }

  handleChange(e){
      this.setState({submit:false})

      this.setState({text : e.target.value})
  }

  onSubmit(){
    var value = this.state.text;
    var newArr = this.state.submitted;
    newArr.push(value);
    this.setState({submitted:newArr,
                  text:""
                    })
  }

  render(){
    return(<div>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className="grid">
          <input value={this.state.text} onChange={e => this.handleChange(e)}></input>
          <Button text={"Submit"} onClick={this.onSubmit}></Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <ul>
        {this.state.submitted.map(s => (<li key={s}>{s}</li>))}
      </ul>
    </div>)
  }
}

export default App

//react-router