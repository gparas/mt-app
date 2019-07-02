import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import fetchData from '../fetchData';

class DummyContent extends Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    fetchData('https://baconipsum.com/api/?type=meat-and-filler&paras=10')
      .then(data => {
        this.setState({
          isLoading: false,
          content: data,
        });
        console.log(data);
      })
      .catch(err =>
        console.log(
          'There was a problem with the fetch operation:',
          err.message
        )
      );
  }
  render() {
    if (this.state.isLoading) {
      return <Typography>isLoading</Typography>;
    }
    return (
      <Container>
        <Box my={2}>
          {this.state.content.map((text, key) => (
            <Typography gutterBottom key={key}>
              {text}
            </Typography>
          ))}
        </Box>
      </Container>
    );
  }
}

export default DummyContent;
