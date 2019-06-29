/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/

const styles = theme => ({
  drawer:{
    maxWidth: '85%',
    width: theme.spacing.unit * 45
  },
  header:{
    height: '180px',
    color: 'white',
    background: theme.palette.primary['500'],
    padding: '16px',
  },
  icon:{
    fontSize:'16px',
    margin: '5px'
  },
  listItem:{
    paddingLeft: '15px',
    height: '50px',
    paddingRight: '15px',
    '&:hover':{
     backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },
  // these must be defined, even if empty so we can reference them in other nested rules
  listIcon:{},
  open: {}
});
export default styles;