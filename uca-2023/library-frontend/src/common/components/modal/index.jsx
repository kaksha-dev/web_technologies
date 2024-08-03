import React from 'react';
import Button from './../button';

const Modal = ({
    children,
    cancelButtonLabel = 'Close',
    okButtonlabel = 'Save Changes',
    modalId,
    cancelAction = () => {
        document.getElementById(modalId).style.display = 'none';
    },
    okAction,
    modalBody,
    modalTitle = 'Confirtmation',
}) => {
    return (
        <div className="modal" tabindex="-1" id={modalId}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <Button label={'X'} clickHandler={cancelAction} />
                    </div>
                    <div className="modal-body">
                        <p>{children}</p>
                    </div>
                    <div className="modal-footer">
                        <Button
                            label={cancelButtonLabel}
                            clickHandler={cancelAction}
                        />
                        <Button label={okButtonlabel} clickHandler={okAction} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
