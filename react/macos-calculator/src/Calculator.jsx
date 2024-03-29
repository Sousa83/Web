import React from 'react'
import './css/calculator.css'

class Calculator extends React.Component{
  state = {
    currentValue: '',
    memoryValue: 0,
    lastOperation: ''
  }
  
  resolveLastOperation() {
    const memoryValue = Number(this.state.memoryValue) 
    const currentValue = Number(this.state.currentValue)
    let result

    this.state.lastOperation === '+'?
      result = (memoryValue + currentValue).toString():
    this.state.lastOperation === '-'?
      result = (memoryValue - currentValue).toString():
    this.state.lastOperation === 'X'?
      result = (memoryValue * currentValue).toString():
      result = (memoryValue / currentValue).toString()

    return result
  }

  hasLastOperation(){
    return this.state.lastOperation
  }

  setMemoryAndOperation(operation){
    console.log(this.state.currentValue)
    if(this.state.currentValue) this.setState({memoryValue: this.state.currentValue})
          
    this.setState({currentValue: '', lastOperation: operation})
  } 

  newOperation(operation) {
    switch(operation){
      case 'AC': 
        this.setState({memoryValue: 0, currentValue: '', lastOperation: ''})
        break;
      case '+-':
        if(this.state.currentValue){
          let currentValue = this.state.currentValue
          
          currentValue.charAt(0) === '-'?
            currentValue = currentValue.replace('-', ''):
            currentValue = '-' + currentValue
            
          this.setState({currentValue: currentValue})
        }
        break;
      case '%':
        console.log('+-')
        break;
      case '/':
        if(this.hasLastOperation()){
          let result = this.resolveLastOperation()
          this.setState({memoryValue: result, currentValue: '', lastOperation: '/'})
        } else {
          this.setMemoryAndOperation('/')
        }

        break;
      case 'X':
        if(this.hasLastOperation()){
          let result = this.resolveLastOperation()
          this.setState({memoryValue: result, currentValue: '', lastOperation: 'X'})
        } else {
          this.setMemoryAndOperation('X')
        }

        break;
      case '-':
        if(this.hasLastOperation()){
          let result = this.resolveLastOperation()
          this.setState({memoryValue: result, currentValue: '', lastOperation: '-'})
        } else {
          this.setMemoryAndOperation('-')
        }
        
        break;
      case '+':
        if(this.hasLastOperation()){
          let result = this.resolveLastOperation()
          this.setState({memoryValue: result, currentValue: '', lastOperation: '+'})
        } else {
          this.setMemoryAndOperation('+')
        }

        break;
      case '=':
        if(this.hasLastOperation()){
          let result = this.resolveLastOperation()
          this.setState({memoryValue: result, currentValue: '', lastOperation: ''})
        }
        break;
      default:
        break;
    }
  }
  
  alreadyValueInMemory() {
    return this.state.memoryValue
  }

  alreadyPoint() {
    return this.state.currentValue.includes('.')
  }

  concatNumber(number) {
    //Verificação temporária
    if(this.state.currentValue.length === 14)
      return

    number === '.'?
      this.alreadyPoint()?
        this.setState({currentValue: this.state.currentValue}):
        this.setState({currentValue: this.state.currentValue.concat(number)})
      :
      this.setState({currentValue: this.state.currentValue.concat(number)})
  }

  clickButton(btnValue) {
    !Number.isNaN(Number(btnValue))? 
      this.concatNumber(btnValue) : 
    btnValue === '.'?
      this.concatNumber(btnValue) : 
      this.newOperation(btnValue)
  }

  render() {
    return (
      <section className="centerizered">
        <div className="bg-dark-1 layout">
          <section className="visor">{this.state.currentValue? this.state.currentValue : this.state.memoryValue}</section>
          <section>
            <table>
              <tbody>
                <tr>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="AC" className="btn bg-dark-2">AC</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="+-" className="btn bg-dark-2">+-</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="%" className="btn bg-dark-2">%</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="/" className="btn bg-orange">/</button></td>
                </tr>
                <tr>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="7" className="btn bg-dark-3">7</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="8" className="btn bg-dark-3">8</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="9" className="btn bg-dark-3">9</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="X" className="btn bg-orange">X</button></td>
                </tr>
                <tr>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="4" className="btn bg-dark-3">4</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="5" className="btn bg-dark-3">5</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="6" className="btn bg-dark-3">6</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="-" className="btn bg-orange">-</button></td>
                </tr>
                <tr>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="3" className="btn bg-dark-3">3</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="2" className="btn bg-dark-3">2</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="1" className="btn bg-dark-3">1</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="+" className="btn bg-orange">+</button></td>
                </tr>
                <tr>
                  <td colSpan="2"><button className="btn bg-dark-3" onClick={e => this.clickButton(e.target.value)} value="0" >0</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="." className="btn bg-dark-3">.</button></td>
                  <td><button onClick={e => this.clickButton(e.target.value)} value="=" className="btn bg-orange">=</button></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    )
  }
}

export default Calculator