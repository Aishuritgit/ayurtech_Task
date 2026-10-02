const express = require('express')
const avgRoutes = require('./routes/avgRoutes')

const app = express();
app.use(express.json());

// Average API
app.use('/',avgRoutes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log(`server running on port 3000`);
    });
}

module.exports = app;