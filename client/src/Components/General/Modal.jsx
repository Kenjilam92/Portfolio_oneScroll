import React from 'react';

const Modal = props =>{
  return(
    <div className="modal fade" id={props.ModalId} role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.ModalHeader}</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        {props.footer==true?
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
        :null}
      </div>
    </div>
  </div>
  );
}

export default Modal;