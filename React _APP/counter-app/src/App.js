import React, {
  Component
} from 'react';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [{
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      },
      {
        id: 5,
        value: 0
      }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    if (counters[index].value > 0) counters[index].value--;
    if (counters[index].value === 0) counters[index].value = 0;
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  render() {
    return ( <
      Counters counters = {
        this.state.counters
      }
      onReset = {
        this.handleReset
      }
      onIncrement = {
        this.handleIncrement
      }
      onDecrement = {
        this.handleDecrement
      }
      onDelete = {
        this.handleDelete
      }
      />
    );
  }
}

export default App;