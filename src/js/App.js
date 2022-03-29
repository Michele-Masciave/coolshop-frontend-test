import React from 'react'
import {Container} from 'react-bootstrap';
//css import
import '../css/style.scss';
//components import
import CalcRow from './components/CalcRow.js';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addends: [
        {value: 0, sign: true, enabled: true},
        {value: 10, sign: true, enabled: true},
        {value: 20, sign: true, enabled: false}
      ],
    };
  }

  /**
   * add new row to the calculator
   */
  addNewRow = () => {
    this.setState({ addends: [...this.state.addends, {value: 0, sign: true, enabled: true}]})
  }

  /**
  * remove given row from the calculator
  * @param {*} index of the called raw
  */
  removeRowByIndex = (index) => {
    let newList = [...this.state.addends];
    newList.splice(index, 1);
    if (newList.length > 0)
      this.setState({addends: newList,});
    else
      this.setState({addends: []});
  }
  
  /**
   * edit the number of the index-element of the list
   * @param {*} index of the called raw
   * @param {*} new_value of the called raw
   */
  editRowNumber = (index, new_value) => {
    let newList = [...this.state.addends];
    newList[index]['value'] = new_value;
    this.setState({
      addends: newList,
    })
  }
  
  /**
   * edit the sign of the index-element of the list
   * @param {*} index of the called raw
   */
  editSign = (index) => {
    let newList = [...this.state.addends];
    newList[index]['sign'] = !newList[index]['sign']
    this.setState({
      addends: newList,
    })
  }

  /**
   * edit the enabling of the index-element of the list
   * @param {*} index of the called raw
   */
  editEnabling = (index) => {
    let newList = [...this.state.addends];
    newList[index]['enabled'] = !newList[index]['enabled']
    this.setState({
      addends: newList,
    })
  }

  render(){
    return (
      <Container fluid className="app-container">
        <Header values={this.state.addends}></Header>
        <Container className="app-calculator">
          {
            this.state.addends.map((value, index) => { return <CalcRow key={index}
              idx={index} value={value.value} sign={value.sign} enabled={value.enabled}
              editSign={this.editSign}
              editEnabling={this.editEnabling}
              editRowNumber={this.editRowNumber}
              removeRowByIndex={this.removeRowByIndex}></CalcRow> })
          }
        </Container>
        <Footer addNewRow={this.addNewRow}></Footer>
      </Container>
    );
  }
}

export default App;
