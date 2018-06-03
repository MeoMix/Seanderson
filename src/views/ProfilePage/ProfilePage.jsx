import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import IconButton from 'components/CustomButtons/IconButton.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import profile from 'assets/img/sean.jpg';
import profilePageStyle from 'assets/jss/views/profilePage.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div>
        <Header
          color='transparent'
          brand=''
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify='center'>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt='...' className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Sean Anderson</h3>
                      <h6>Sr. Software Developer</h6>
                      
                      <IconButton color='transparent' className={classes.margin5}>
                        <FontAwesomeIcon className={classes.socials} icon={['fab', 'twitter']} />
                      </IconButton>
                      <IconButton color='transparent' className={classes.margin5}>
                        <FontAwesomeIcon className={classes.socials} icon={['fab', 'stack-overflow']} />
                      </IconButton>
                      <IconButton color='transparent' className={classes.margin5}>
                        <FontAwesomeIcon className={classes.socials} icon={['fab', 'github']} />
                      </IconButton>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Hey there! Welcome.<br /><br />

                  You're probably all like, "Wow! What's this? This website is barren."<br /><br />

                  And you're right! It is barren! Workin' on it.<br /><br />
                  
                  I'm pretty familiar with Vue/Vuex/Vuetify, but could use some practice with React. So, here I am, putting some hours in.<br /><br />
                  This website is very much so a <strong>WIP</strong>. Check back daily to see it grow and improve!<br /><br />

                  Cheers,<br />
                  Sean<br /><br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);