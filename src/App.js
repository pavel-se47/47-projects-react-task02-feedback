import React, { Component } from 'react';
import Container from 'components/GeneralContainer/generalContainer';
import FeedbackButtons from './components/FeedbackButtons/FeedbackButtons';
import FeedbackStatistics from 'components/FeedbackStaistics/FeedbackStaistics';
import NoFeedback from 'components/NoFeedback/NoFeedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    if (event.currentTarget.id === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (event.currentTarget.id === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (event.currentTarget.id === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0 ||
      this.state.neutral !== 0 ||
      this.state.bad !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    return (
      <Container>
        <FeedbackButtons
          options={Object.keys(this.state)}
          newFeedback={this.addFeedback}
        />
        {this.state.good !== 0 ||
        this.state.neutral !== 0 ||
        this.state.bad !== 0 ? (
          <FeedbackStatistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            per={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <NoFeedback message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default App;
