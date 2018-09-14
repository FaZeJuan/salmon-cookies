'used strict';

const express = require('express');
const app =express();
const PORT = process.env.PORT || 3000;
    app.listed(PORT, ()=> {
        console.log(`Server is listening on the port ${PORT}`);
    } ); 