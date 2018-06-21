import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { Segment, Grid, Divider, Container, Button, Menu } from 'semantic-ui-react';
import StrikerLogo from '../photos/icon_tools_green_solid.png';

class Home extends React.Component {

  viewOnly = () => {
    return(
      <Container>
      <Grid>
        <Divider hidden/>
        <Grid.Row>
          <Grid.Column width={4} textAlign='left'>
            <Segment circular style={styles.viewOnly}>VO</Segment>
          </Grid.Column>

          <Grid.Column width={8}>
            <Divider hidden/>
            <div style={styles.strikerLogo}><Link to='/'><img src={StrikerLogo} alt='Striker Logo' width='250px' height='250px'/></Link></div>
            <Divider hidden/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8} textAlign='center'>
                  <Link to='/login'>
                    <Segment style={styles.textStyles} textAlign='center'>
                      <Divider hidden/>
                      LOGIN
                      <Divider hidden/>
                    </Segment>
                  </Link>
                </Grid.Column>

                <Grid.Column width={8} textAlign='center'>
                  <Link to='/register'>
                    <Segment style={styles.textStyles} textAlign='center'>
                      <Divider hidden/>
                      SIGN-UP
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

  clanLeader = () => {
    return(
      <Container>
      <Grid>
        <Divider hidden/>
        <Grid.Row>
          <Grid.Column width={4} textAlign='left'>
            <Segment circular style={styles.viewOnly}>CL</Segment>
            <Divider hidden/>
              <Grid.Row>
                <Segment circular textAlign='center'>{this.logout()}</Segment>
              </Grid.Row>
            <Divider hidden/>
              <Grid.Row>
                <Segment>
                  NOTES:
                  <Segment>
                    I was working on parts of the lay out of the software.
                    I need to work on adding a thrird ADMIN role and creating
                    the models and controllers for the wars and the clan leaders profils.
                  </Segment>
                </Segment>
              </Grid.Row>
          </Grid.Column>

          <Grid.Column width={8}>
            <Divider hidden/>
            <div style={styles.strikerLogo}><Link to='/'><img src={StrikerLogo} alt='Striker Logo' width='250px' height='250px'/></Link></div>
            <Divider hidden/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                </Grid.Column>

                <Grid.Column width={8} textAlign='center'>
                  <Link to='/myProfile'>
                    <Segment style={styles.textStyles} textAlign='center'>
                      <Divider hidden/>
                      MY PROFILE
                      <Divider hidden/>
                    </Segment>
                  </Link>
                </Grid.Column>

                <Grid.Column width={4}>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>

                <Grid.Column width={12}>
                  <Segment style={styles.warsSegment}>WARS</Segment>
                </Grid.Column>

                <Grid.Column width={2}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column width={4} textAlign='right'>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }

  logout = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    }
  }

  render() {
    const { user } = this.props;

    if (user.id) {
      return(
        <div>
          {this.clanLeader()}
        </div>
      )
    } else {
      return (
        <div>
          {this.viewOnly()}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
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
  },
  viewOnly: {
    fontWeight: 'bold'
  }
}

export default withRouter(connect(mapStateToProps)(Home));
