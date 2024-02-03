
const express = require ('express');
const bodyParser = require ('body-parser');
const app = express() ;
const PORT = 3000;

app.use(bodyParser.json()) ;

// TEST DATA
const users = [
  {username: 'admin', password: 'admin123', role: 'admin' } ,
  { username: 'user', password: 'user123', role: 'user' } ,
];

// AUTHENTICATION FUNCTION
const authenticateUser = (req, res, next) => {

  const { username, password } = req.headers;
  const user = users.find(u => u.username === username && u.password === password) ;

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' } ) ;
  }
};

// ROUTE AUTHENTICATION
app.post('/api/login', (req, res ) => {
  const { username , password } = req.body;
  const user = users.find(u => u.username === username && u.password === password) ;

  if (user) {
    res.json({ message: 'Login successful' , user });
  } else {
    res.status(401).json({ error:  'Invalid credentials ' });
  }
});

// ONLY ACCESSED BY ADMIN
app.get('/api/projects' , authenticateUser, ( req, res) => {
  if (req.user.role ===  'admin') {
    res.json({ message: 'Projects management page' });
  } else {
    res.status(403).json({ error: 'Permission denied' });
  }
});

// SAME WITH LINKS
app.get('/api/links', authenticateUser, (req, res) => {
  if (req.user.role ===  'admin') {
    res.json( { message: 'Links management page' });
  } else {
    res.status( 403 ).json( { error: 'Permission denied' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
