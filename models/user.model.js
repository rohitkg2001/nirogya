const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    image_url: {
      type: String, // path to image
    },
    loginActivities: [
      {
        description: {
          type: String,
          enum: ["Successful Login", "Successful Logout"],
        },
        browserType: {
          type: String, // e.g., Chrome, Firefox
          enum: [
            "Google Chrome",
            "Firefox",
            "Microsoft Edge",
            "Opera",
            "Samsung Internet",
            "Internet Explorer",
            "UC Browser",
          ],
        },
        platform: {
          type: String,
        },
        ipAddress: {
          type: String,
        },
        loggedAt: {
          type: Date, // Timestamp of login/logout
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
