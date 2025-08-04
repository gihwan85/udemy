// src/components/ProductCard.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import './ProductCard.css';

function ProductCard(props) {
    const {
        title,
        description,
        price,
        discount,
        originalPrice,
        brand,
        image,
    } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const handleCardClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="card" onClick={handleCardClick}>
                <img src={image} alt={title} className="product-img" />
                <div className="product-info">
                    <h4 className="title">{title}</h4>
                    <p className="desc">{description}</p>
                    <div className="price-section">
                        {discount ? (
                            <>
                                <span className="discount">{discount}%</span>
                                <span className="price">{price.toLocaleString()}원</span>
                                <span className="original-price">{originalPrice.toLocaleString()}원</span>
                            </>
                        ) : (
                            <span className="price">{price.toLocaleString()}원</span>
                        )}
                    </div>
                    <p className="brand">{brand}</p>
                </div>
            </div>

            {modalOpen && (
                <Modal onClose={handleCloseModal}>
                    <h2>{title}</h2>
                    <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
                    <p>{description}</p>
                    <p><strong>브랜드:</strong> {brand}</p>
                    <p><strong>가격:</strong> {price.toLocaleString()}원</p>
                    {/* 여기 버튼은 제거됨! */}
                </Modal>
            )}
        </>
    );
}

export default ProductCard;
