import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Grid, Divider, Container, Button } from 'semantic-ui-react';
import StrikerLogo from '../photos/icon_tools_green_solid.png';

class Home extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Divider hidden/>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>

            <Grid.Column width={8}>
              <Divider hidden/>
              <div style={styles.strikerLogo}><img src={StrikerLogo} width='250px' height='250px'/></div>
              {/* <h1 style={styles.strikerLogo}>STRIKER</h1> */}
              <Divider hidden/>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Link to='/login'>
                      <Segment textAlign='center'>
                        <Divider hidden/>
                        <Button style={styles.textStyles}>LOGIN</Button>
                        <Divider hidden/>
                      </Segment>
                    </Link>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Link to='/register'>
                      <Segment textAlign='center'>
                        <Divider hidden/>
                        <Button style={styles.textStyles}>SIGN-UP</Button>
                        <Divider hidden/>
                      </Segment>
                    </Link>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={4}>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Segment style={styles.warsSegment}>WARS</Segment>
                  </Grid.Column>

                  <Grid.Column width={4}>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={4}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  textStyles: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Impact'
  },
  strikerLogo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Impact',
    fontSize: '25px'
  },
  warsSegment: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Impact'
  }
}

export default Home;
