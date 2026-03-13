# Backend (Auth + Posts + Reviews)

### Run
```
npm install
npm run dev
```

### Env (.env)
```
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
JWT_SECRET=supersecret_dev
PORT=5000
```

### Endpoints
Auth:
- POST /api/auth/register  { name, email, password }
- POST /api/auth/login     { email, password }
- GET  /api/auth/me        (Bearer token)

Posts:
- GET  /api/posts
- GET  /api/posts/:id
- POST /api/posts          (Bearer token) { title, content }

Reviews:
- GET  /api/reviews/post/:postId
- POST /api/reviews/post/:postId  (Bearer token) { rating, comment }
