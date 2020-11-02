import { connect } from "react-redux";
import React from "react";
import data from "../data/data.json"
import { ButtonGroup, Button, Form, NavDropdown } from "react-bootstrap"

class Pins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: 0,
      score: 0
    }
  }

  componentDidMount() {
    this.loadQuestions()
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentQuestion = this.state.currentQuestion
    const correctAnswer = this.state.questions[currentQuestion].correct
    const answer = e.currentTarget.value
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    if (answer === correctAnswer) {
      this.setState({ score: this.state.score + 1 })
    }
  }

  handleRestart(e) {
    e.preventDefault();
    this.setState({
      questions: [],
      currentQuestion: 0,
      score: 0
    });
    this.loadQuestions();
  }

  question() {
    if (this.state.questions.length && this.state.currentQuestion !== 10) {
      const currentQuestion = this.state.currentQuestion
      const question = this.state.questions[currentQuestion].question
      const answers = this.state.questions[currentQuestion].incorrect
      answers.push(this.state.questions[currentQuestion].correct)
      // this.setState({
      //   currentQuestion: question,
      //   currentAnswers: answers
      // })      
      const listedQuestions = answers.map(ele => {
        return (
          <Button
          className="game-button"
            onClick={this.handleSubmit.bind(this)}
            value={ele}
          >{ele}</Button>)
      })
      return (
        <div className="questions">
          <p>
            {question}
          </p>
          {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
          <ButtonGroup vertical>
            {listedQuestions}
          </ButtonGroup>
          {/* </form> */}
        </div>
      )
    } else if (this.state.currentQuestion === 10) {
      return (
        <div className="game-over">
          <div className="game-over-text">
            GAME OVER
          </div> 
          <button
            className="game-over-button"
            onClick={this.handleRestart.bind(this)}>Try Again?</button>
        </div>

      )
    } else {
      return null
    }
  }

  loadQuestions() {
    const questions = this.shuffle(data)
    questions.slice(0, 10)
    this.setState({ questions: questions.slice(0, 10) })
    console.log(this.state)
  }

  shuffle(array) {
    return (array.sort(() => Math.random() - 0.5))
  }

  render() {
    // const questions = JSON.parse(data)
    // console.log(questions[0])
    const score = this.state.score
    console.log(this.state)
    return (
      <div className="main">
        <div className="content">
          <div className="score">Your score is {score} / 10</div>

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