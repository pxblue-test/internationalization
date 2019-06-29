import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styleClasses';
import * as EnglishStrings from './resources/english';
import * as ArabicStrings from './resources/arabic';
import * as GermanStrings from './resources/german';
import * as SpanishStrings from './resources/spanish';

import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

import BoltIcon from '@material-ui/icons/OfflineBolt';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CartIcon from '@material-ui/icons/ShoppingCart'
import CancelIcon from '@material-ui/icons/Cancel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import ErrorIcon from '@material-ui/icons/Error';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      drawerOpen: false,
      lang: 'en',
    };
  }

  onSelect(itemIndex, event) {
    const index = this.state.selectedItems.indexOf(itemIndex);
    if (index === -1) {
      this.setState({
        selectedItems: [...this.state.selectedItems, itemIndex]
      })
    }
    else {
      this.setState({
        selectedItems: this.state.selectedItems.filter((_, i) => i !== index)
      });
    }
  };

  isSelected(itemIndex) {
    return this.state.selectedItems.indexOf(itemIndex) !== -1;
  }

  onCancel() {
    this.setState({ selectedItems: [] })
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  _isRTL(){
    return this.state.lang === 'ar';
  }

  getLangObject(lang) {
    switch (lang) {
      case 'de':
        return GermanStrings;
      case 'ar':
        return ArabicStrings;
      case 'es':
        return SpanishStrings;
      case 'en':
      default:
        return EnglishStrings;
    }
  }

  render() {
    const { classes } = this.props;
    const langObject = this.getLangObject(this.state.lang);
    const fruitList = langObject.FRUIT_LIST;

    return (
      <div dir={this._isRTL() ? 'rtl' : 'ltr'} >
        {this.getMobileNavigationMenu()}
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={() => this.toggleDrawer()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" >
              {langObject.I18N}
            </Typography>
          </Toolbar>
        </AppBar>

        <Toolbar color="#fff" position="static">
          <Select
            value={this.state.lang}
            onChange={(event) => { this.setState({ lang: event.target.value }) }}
            style={{ padding: '5px', width: '180px' }}
          >
            <MenuItem value={'en'}>{langObject.DROPDOWN_LANGS[0]}</MenuItem>
            <MenuItem value={'es'}>{langObject.DROPDOWN_LANGS[1]}</MenuItem>
            <MenuItem value={'de'}>{langObject.DROPDOWN_LANGS[2]}</MenuItem>
            <MenuItem value={'ar'}>{langObject.DROPDOWN_LANGS[3]}</MenuItem>
          </Select>
          <Button variant="contained" color="primary" style={{ margin: '10px', textTransform: 'none' }}>
            <CartIcon className={classes.icon} style={this._isRTL() ? { transform: 'scaleX(-1)' } : null} />
            <Typography noWrap color="inherit" > {langObject.ADD_TO_CART} </Typography>
          </Button>
        </Toolbar>

        <List >
          {fruitList.map((item, index) => (
            <ListItem style={this._isRTL() ? { textAlign: 'right' } : null} key={'listItem_' + index} button>
              <Checkbox
                value={item.name}
                onChange={(e) => this.onSelect(index, e)}
                checked={this.isSelected(index)}
              />
              <ListItemText primary={item} secondary={langObject.MORE_INFO} />
              <ListItemIcon>
                <ArrowForwardIosIcon className={classes.icon} style={this._isRTL() ? { transform: 'scaleX(-1)' } : null} />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

        <footer className={this.state.selectedItems.length > 0 ? 'active snackbar' : 'snackbar'} style={this._isRTL() ? { paddingRight: '32px', paddingLeft: '4px' } : null}>
          <Typography>
            {this.state.selectedItems.length + " " + langObject.ITEMS}
          </Typography>
          <div>
            <IconButton onClick={this.onCancel.bind(this)}>
              <CancelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </footer>
      </div>
    );
  }

  getPrimaryNavigation() {
    const { classes } = this.props;
    const langObject = this.getLangObject(this.state.lang);
    const iconArray = [<HomeIcon />, <FolderIcon />, <ErrorIcon />, <SettingsIcon />, <HelpIcon />];

    return (
      <List dir={this._isRTL() ? 'rtl' : 'ltr'} style={{ padding: '0px' }}>
        {langObject.MENU_ITEMS.map((text, index) => (
          <ListItem
            style={this._isRTL() ? { textAlign: 'right' } : null}
            className={classes.listItem}
            button key={text}
            onClick={() => this.toggleDrawer()}
          >
            <ListItemIcon style={this._isRTL() ? { transform: 'scaleX(-1)' } : null}>{iconArray[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    );
  };

  getUserDetails() {
    const { classes } = this.props;
    const langObject = this.getLangObject(this.state.lang);
    return (
      <div dir={this._isRTL() ? 'rtl' : 'ltr'} className={"flexVertBottom " + classes.header} >
        <BoltIcon style={{ fontSize: '64px', transform: 'rotate(42deg)' }} />
        <div
          style={{
            width: '100%',
            padding: '5px'
          }}
        >
          <Typography
            variant="subtitle1"
            color="inherit"
            style={{ lineHeight: '1rem' }}
          >PX {langObject.BLUE}</Typography>
          <div className={'flexHor'}>
            <Typography
              variant="subtitle1"
              color="inherit"
              style={{ lineHeight: '1rem' }}
            >{langObject.I18N}</Typography>
            <div style={{ flex: '1 1 0px' }} />
          </div>
        </div>
      </div>
    );
  }

  getMobileNavigationMenu() {
    const { classes } = this.props;

    return (
      <Drawer
        open={this.state.drawerOpen}
        onClose={() => this.toggleDrawer()}
        classes={{ paper: classes.drawer }}
        anchor={this._isRTL() ? 'right' : 'left'}
      >
        <div
          className={"flexVert"}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          {this.getUserDetails()}
          <div style={{ flex: '1 1 0px', overflowY: 'auto' }}>
            {this.getPrimaryNavigation()}
            <div style={{ flex: '1 1 0px' }} />
          </div>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(App);

