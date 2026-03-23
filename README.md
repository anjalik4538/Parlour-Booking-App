# 💄 Parlour Booking App

A full-stack web application that allows users to book beauty services online easily and helps admins manage bookings efficiently.

---

## 🚀 Features

### 👩‍💻 User Side
- View services and pricing
- Book appointments online
- Auto price update based on selected service
- Responsive and user-friendly UI

### 🛠 Admin Side
- View all bookings in dashboard
- Update booking status (Pending / Confirmed / Completed)
- Delete bookings
- Real-time data from database

---

## 🧱 Tech Stack

### Frontend
- React.js
- CSS (Custom Styling)
- Axios

### Backend
- Django
- Django REST Framework

### Database
- SQLite (Default)

---

## 📂 Project Structure
parlour-booking-app/
│
├── frontend-react/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│
├── backend-django/
│ ├── booking/
│ ├── backend/
│ └── manage.py


<h2>Backend Setup</h2>
cd backend-django

python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python manage.py runserver

<h2>Frontend Setup</h2>
cd frontend-react

npm install
npm start
