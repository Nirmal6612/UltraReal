# 🚀 UltraReal

## 🔍 Overview

**UltraReal** is a full-stack web application integrated with blockchain technology to detect counterfeit products.

The system uses **QR codes minted as NFTs** to track and verify products across the supply chain — ensuring authenticity from manufacturer to end user.

---

## 🎯 Problem Statement

Counterfeit products are a major issue in modern supply chains, leading to:

* Financial losses 💸
* Brand damage 🏷️
* Consumer safety risks ⚠️

---

## 💡 Solution

UltraReal provides a **secure and transparent verification system** where:

* Each product is assigned a **unique QR code (NFT-based)**
* The product journey is tracked across:

  * Manufacturer
  * Supplier
  * Retailer

Users can scan the QR code to verify whether a product is **authentic or fake**.

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React.js
* CSS

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB

### 🔹 Blockchain

* NFT-based product verification

---

## ⚙️ Features

* 🔐 User authentication & role-based access
* 📦 Product tracking across supply chain
* 🔎 QR code scanning for verification
* 🧾 Blockchain-based NFT validation
* 🚫 Fake product detection

---

## 📁 Project Structure

```
UltraReal/
 ├── Backend/
 ├── Frontend/
 ├── .gitignore
 └── README.md
```

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/Nirmal6612/UltraReal.git
cd UltraReal
```

---

### 2️⃣ Setup Backend

```
cd Backend
npm install
```

Create a `.env` file inside Backend:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

Run backend:

```
npm start
```

---

### 3️⃣ Setup Frontend

```
cd Frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in Backend and add:

* PORT
* MONGO_URI
* JWT_SECRET

---

## 📸 Future Improvements

* 📱 Mobile app integration
* 🌐 Multi-chain blockchain support
* 📊 Analytics dashboard

---

## 🤝 Contributors

* Hritik Nirmal


---

## ⭐ Acknowledgement

This project demonstrates the use of **blockchain + full-stack development** to solve real-world problems like counterfeit detection.

---

## 📌 License

This project is for educational purposes.
