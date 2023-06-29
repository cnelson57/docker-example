const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Shalom' }) 
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );