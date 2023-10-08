const app = require('./index');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
});