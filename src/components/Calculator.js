import React from 'react';
/* Global */
let ram = [];
let number = '';
let operator = '';

class Calculator extends React.Component {
  /****************************************
  *          Constructor section          *
  *****************************************/
  constructor(props) {
    super(props);
    this.state = {
      display: '0'
    };
  };
  /****************************************
  *          Methods                      *
  *****************************************/
  setTheState = () => {
    this.setState({
      display: number
    });
  };
  clearDisplay = () => {
    this.setState({
      display: '0'
    });
    ram = [];
    number = '';
    console.log('Display cleared');
  };

  inputNumber = (event) => {
    number += event.target.value;
    this.setTheState();
  };

  inputZero = () => {
    if (number !== '') {
      number += '0';
      this.setTheState();
    }
  };

  inputDot = () => {
    if (!number.includes('.')) {
      if (number === '') {
        number = '0';
      }
      number += '.';
      this.setTheState();
    }
  };

  switchSign = () => {
    if (!number.includes('-')) {
      number = number.split('');
      number.unshift('-');
      number = number.join('');
    } else {
      number = number.split('');
      number.shift();
      number = number.join('');
    }
    this.setTheState();
  }

  inputOperator = (event) => {
    operator = event.target.value;
    ram.push(number);
    ram.push(operator);
    ram = ram.filter((item => item !== ''));
    number = '';
    this.setState({
      display: this.state.display
    });
  };

  equalsTo = () => {
    let result = 0;
    if (number !== '') {
      ram.push(number);
      ram = ram.map((i) => {
        if (!(i === '+' || i === '-' || i === 'x' || i === '/')) {
          return parseFloat(i);
        }
        return i;
      });

      for (let i = 0; i < ram.length; i++) {

        if (!Number.isFinite(ram[i]) && ram[i + 1] === '-' && Number.isFinite(ram[i + 2])) {
          ram[i + 2] = ram[i + 2] * -1;
          ram.splice(i + 1, 1);
        }

        if (!Number.isFinite(ram[i]) && !Number.isFinite(ram[i + 1])) {
          ram[i] = ram[i + 1];
          ram.splice(i + 1, 1);
          i--;
        }
      }
      console.log(ram);


      for (let i = 0; i < ram.length; i++) {
        switch (ram[i]) {
          case '+':
            ram[i + 1] = ram[i - 1] + ram[i + 1];
            break;
          case '-':
            ram[i + 1] = ram[i - 1] - ram[i + 1];
            break;
          case 'x':
            ram[i + 1] = ram[i - 1] * ram[i + 1];
            break;
          case '/':
            ram[i + 1] = ram[i - 1] / ram[i + 1];
            break;
          default:
            break;
        };
      };
      result = ram[ram.length - 1];
      number = result;
      this.setTheState();
    };
  };

  /****************************************
  *            Render section             *
  *****************************************/
  render() {
    return (
      <main id='calculator' className='container'>
        {/* Display */}
        <section id='display'>
          {this.state.display}
        </section>
        {/* Pad */}
        <section id='pad'>
          <div>
            <button id='clear' className='btn  btn-danger' onClick={this.clearDisplay}>AC</button>
            <button id='toggle' className='btn btn-primary' onClick={this.switchSign}>+/-</button>
            <button id='divide' className='btn  btn-info' value='/' onClick={this.inputOperator}>/</button>

          </div>
          <div>
            <button id='seven' className='btn  btn-dark' value='7' onClick={this.inputNumber}>7</button>
            <button id='eight' className='btn btn-dark' value='8' onClick={this.inputNumber}>8</button>
            <button id='nine' className='btn btn-dark' value='9' onClick={this.inputNumber}>9</button>
            <button id='multiply' className='btn  btn-info' value='x' onClick={this.inputOperator}>x</button>
          </div>
          <div>
            <button id='four' className='btn  btn-dark' value='4' onClick={this.inputNumber}>4</button>
            <button id='five' className='btn  btn-dark' value='5' onClick={this.inputNumber}>5</button>
            <button id='six' className='btn  btn-dark' value='6' onClick={this.inputNumber}>6</button>
            <button id='subtract' className='btn  btn-info' value='-' onClick={this.inputOperator}>-</button>
          </div>
          <div>
            <button id='one' className='btn  btn-dark' value='1' onClick={this.inputNumber}>1</button>
            <button id='two' className='btn  btn-dark' value='2' onClick={this.inputNumber}>2</button>
            <button id='three' className='btn  btn-dark' value='3' onClick={this.inputNumber}>3</button>
            <button id='add' className='btn  btn-info' value='+' onClick={this.inputOperator}>+</button>
          </div>
          <div>
            <button id='zero' className='btn  btn-dark' value='0' onClick={this.inputZero}>0</button>
            <button id='decimal' className='btn  btn-primary' onClick={this.inputDot}>.</button>
            <button id='equals' className='btn  btn-success' value='=' onClick={this.equalsTo}>=</button>
          </div>
        </section>
      </main>
    );
  };
};

export default Calculator;