/*---------------------------------
有时间的话可以先去学一学react-router-
没时间的话复习一下就OK了            -
有什么搞不懂的随时问我              -
---------------------------------*/

import React from 'react'
import Button from './Components/Button'
import Grid from '@material-ui/core/Grid';
import './CSS/style.css'
class App extends React.Component{
  constructor(props){//Constructor:必须得有的东西
    super(props)//第一行必须得是这个super(props)
    this.state = {
      text : "",
      submitted:[],
    }//设定初始的state

    this.changeText = this.changeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    //不是ArrowFunction的话不bind用不了
  }

  //更改state中的text为Goodbye
  changeText(){
    this.setState({text:"Goodbye"})
  }

  //在input中文字发生改动的时候调用的函数
  handleChange(e){
      this.setState({text : e.target.value})//e.taget.value：当前input里面输入了的值
  }

  //点了提交按钮之后调用的函数
  onSubmit(){
    var value = this.state.text;
    //新建一个array，让它等于原来的array，把它加上新submit的element之后再赋值给state里面的那个array
    var newArr = this.state.submitted;
    newArr.push(value);
    //----------------------------------------------------------------
    this.setState({submitted:newArr,
                  text:""//清空text
                    })
  }

  render(){
    return(<div>
      {/* Grid System
          reference: https://material-ui.com/components/grid/#grid
      */}
      <Grid container>
        <Grid item xs={12} md={6} lg={4} className="withborder">Item 1</Grid>
        <Grid item xs={12} md={6} lg={4} className="grid withborder">
          <input value={this.state.text} onChange={e => this.handleChange(e)}></input>
          <Button text={"Submit"} onClick={this.onSubmit}></Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className="withborder" >Item 3</Grid>
      </Grid>
      <ul>
        {/* .map() 依次取当前array中的每一个元素，将其作为s后传入function进行处理 */}
        {this.state.submitted.map(s => (<li key={s}>{s}</li>))}
      </ul>
    </div>)
  }
}

//导出
export default App