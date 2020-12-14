import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => ({
  dialogs: state.messanger.dialogs,
});

const mapDispatchToProps = (dispatch) => ({
  
});



const Dialogs_container = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default Dialogs_container;