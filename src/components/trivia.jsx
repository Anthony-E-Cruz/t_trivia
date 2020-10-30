import { connect } from "react-redux";
import React from "react";
import data from "../data/data.json"
import { ButtonGroup, Button, Form, NavDropdown} from "react-bootstrap"

class Pins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0
    }
  }

  componentDidMount() {
    this.loadQuestions()
  }

  question() {
    if (this.state.questions.length) {

      const question = this.state.questions[0].question
      const answers = this.state.questions[0].incorrect
      answers.push(this.state.questions[0].correct)
      console.log(question)
      
      const listedQuestions = answers.map(ele => {
        return(<Button>{ele}</Button>)
      })
      return(
        <div>
          <p>
            {question}
          </p>
          <ButtonGroup vertical>
            {listedQuestions}
          </ButtonGroup>
        </div>
      )
    } else {
      return null
    }
  }

  loadQuestions() {
    const questions = this.shuffle(data)
    questions.slice(0, 10)
    this.setState({ questions: questions.slice(0, 10)})
    console.log(this.state)
  }
  
  shuffle(array) {
    return(array.sort(() => Math.random() - 0.5))
  }

  render() {
    // const questions = JSON.parse(data)
    // console.log(questions[0])
    const questions = this.shuffle(data)
    console.log(this.state)
    return(
      <div>
        <div>
          {this.question()}
        </div>
      </div>
    )
  }
}

const msp = (state) => {
  return {
    
  };
};

const mdp = (dispatch) => ({
  
});

export default connect(msp, mdp)(Pins);