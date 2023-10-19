const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/chat-app-learn_code",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("not connected" + err.message);
    } else {
      console.log("connected");
    }
  }
);
