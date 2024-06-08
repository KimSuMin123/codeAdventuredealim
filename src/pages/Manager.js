import React, { useState, useEffect } from 'react';

function Manager({ setMode }) {
  const [purchaseLogs, setPurchaseLogs] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newQuantity, setNewQuantity] = useState('');

  useEffect(() => {
    fetch('/purchase-log')
      .then((res) => res.json())
      .then((data) => setPurchaseLogs(data));

    fetch('/shop')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleUpdateQuantity = () => {
    if (selectedProduct && newQuantity) {
      fetch(`/update-quantity/${selectedProduct.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setProducts(products.map(product => 
              product.id === selectedProduct.id ? { ...product, productamount: newQuantity } : product
            ));
            setNewQuantity('');
            setSelectedProduct(null);
          } else {
            alert('Failed to update quantity');
          }
        });
    }
  };

  return (
    <div>
      <h2>Manager Page</h2>
      <h3>Purchase Logs</h3>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>구매 품목</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {purchaseLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.username}</td>
              <td>{log.productname}</td>
              <td>{log.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            이름: {product.productname} 
            가격: {product.productprice} 
            수량: {product.productamount}
            <button onClick={() => setSelectedProduct(product)}>수량 변경</button>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div>
          <h4>Update Quantity for {selectedProduct.productname}</h4>
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
          <button onClick={handleUpdateQuantity}>Update Quantity</button>
        </div>
      )}
    </div>
  );
}

export default Manager;
