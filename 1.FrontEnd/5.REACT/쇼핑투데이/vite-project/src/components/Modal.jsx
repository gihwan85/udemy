import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose, children }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
                {/* ✅ CSS Module 방식으로 클래스 적용 */}
                <button className={styles.modalCloseBtn} onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;
