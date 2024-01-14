const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
//New imports

const cors = require("cors");
const httpServer = require("http").createServer(app); // Import and create an HTTP server
const { Server } = require("socket.io");
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"], // Specify the allowed HTTP methods
  },
});

const uri =
  "mongodb+srv://radiationcorporation2:voFlY0Qc8uw3QwxY@cluster0.qcubjlp.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
app.use(cors());
app.use(express.json());

async function run() {
  try {
    const userCollection = client.db("erp-soft").collection("users");
    const employeeCollection = client.db("erp-soft").collection("employees");
    const attendanceCollection = client.db("erp-soft").collection("attendance");
    const holidayCollection = client.db("erp-soft").collection("holiday");
    const positionCollection = client.db("erp-soft").collection("position");
    const bankCollection = client.db("erp-soft").collection("bank");
    const departmentCollection = client.db("erp-soft").collection("department");
    const awardCollection = client.db("erp-soft").collection("awards");
    const clientCollection = client.db("erp-soft").collection("clients");
    const loanCollection = client.db("erp-soft").collection("loan");
    const noticeCollection = client.db("erp-soft").collection("notice");
    const leaveCollection = client.db("erp-soft").collection("leave");
    const subDepartmentCollection = client
      .db("erp-soft")
      .collection("subDepartment");

    app.put("/addLike/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          // status: updateUser.status,
          like: updateUser.like,
        },
      };
      const result = await videoCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.put("/addSalary", async (req, res) => {
      const updateUser = req.body;
      const name = updateUser.department;
      const amount = updateUser.name;
      const filter = { name: name };
      console.log(filter);
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          releaseAmount: amount,
        },
      };
      const result = await employeeCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.post("/addEmployee", async (req, res) => {
      const video = req.body;

      const result = await employeeCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addBank", async (req, res) => {
      const video = req.body;

      const result = await bankCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addLoan", async (req, res) => {
      const video = req.body;

      const result = await loanCollection.insertOne(video);
      res.send(result);
    });
    app.get("/bank", async (req, res) => {
      const query = {};
      const cursor = bankCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/client", async (req, res) => {
      const query = {};
      const cursor = clientCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/notice", async (req, res) => {
      const query = {};
      const cursor = noticeCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/awards", async (req, res) => {
      const query = {};
      const cursor = awardCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/leave", async (req, res) => {
      const query = {};
      const cursor = leaveCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/loans", async (req, res) => {
      const query = {};
      const cursor = loanCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.post("/attendance", async (req, res) => {
      const video = req.body;
      const result = await attendanceCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addNotice", async (req, res) => {
      const video = req.body;
      const result = await noticeCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addDepartment", async (req, res) => {
      const video = req.body;
      const result = await departmentCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addClient", async (req, res) => {
      const video = req.body;
      const result = await clientCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addSubDepartment", async (req, res) => {
      const video = req.body;
      const result = await subDepartmentCollection.insertOne(video);
      res.send(result);
    });
    app.post("/position", async (req, res) => {
      const video = req.body;
      const result = await positionCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addHoliday", async (req, res) => {
      const video = req.body;
      const result = await holidayCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addAward", async (req, res) => {
      const video = req.body;
      const result = await awardCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addLeaveApplication", async (req, res) => {
      const video = req.body;
      const result = await leaveCollection.insertOne(video);
      res.send(result);
    });
    app.get("/holidays", async (req, res) => {
      const query = {};
      const cursor = holidayCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/employees", async (req, res) => {
      const query = {};
      const cursor = employeeCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/departments", async (req, res) => {
      const query = {};
      const cursor = departmentCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.delete("/deleteAward/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await awardCollection.deleteOne(query);
      res.send(result);
    });
    app.delete("/deleteLoan/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await loanCollection.deleteOne(query);
      res.send(result);
    });
    app.delete("/deleteDepartment/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await departmentCollection.deleteOne(query);
      res.send(result);
    });
    app.delete("/deleteNotice/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await awardCollection.deleteOne(query);
      res.send(result);
    });
    app.delete("/deleteBank/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bankCollection.deleteOne(query);
      res.send(result);
    });
    app.delete("/deleteSubDept/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await subDepartmentCollection.deleteOne(query);
      res.send(result);
    });
    app.delete("/deleteEmployee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await employeeCollection.deleteOne(query);
      res.send(result);
    });
    app.get("/subDepartments", async (req, res) => {
      const query = {};
      const cursor = subDepartmentCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/attendance", async (req, res) => {
      const query = {};
      const cursor = attendanceCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });

    // put method

    app.put("/manageAward/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updateUser.name,
          awardDescription: updateUser.awardDescription,
          awardDate: updateUser.awardDate,
          awardBy: updateUser.awardBy,
          awardItem: updateUser.awardItem,
          department: updateUser.department,
        },
      };
      const result = await awardCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
    app.put("/updateEmployee/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updateUser.name,
          selectedPosition: updateUser.selectedPosition,
          selectedCity: updateUser.selectedCity,
          phoneNumber: updateUser.phoneNumber,
          email: updateUser.email,
        },
      };
      const result = await employeeCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
    app.put("/updateBank/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          bankName: updateUser.bankName,
          branchName: updateUser.branchName,
          accountName: updateUser.accountName,
          accountNumber: updateUser.accountNumber,
        },
      };
      const result = await bankCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });
    app.put("/updateNotice/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;
      console.log(updateUser);

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updateUser.name,
          country: updateUser.country,
          noticeDate: updateUser.noticeDate,
          company: updateUser.company,
        },
      };
      const result = await noticeCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.put("/updateSubDept/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updateUser.name,
          department: updateUser.department,
        },
      };
      const result = await subDepartmentCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.put("/updateLoan/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          selectedEmployee: updateUser.selectedEmployee,
          permittedBy: updateUser.permittedBy,
          approveDate: updateUser.approveDate,
          repayment: updateUser.repayment,
          details: updateUser.details,
          amount: updateUser.amount,
          interest: updateUser.interest,
          installmentPeriod: updateUser.installmentPeriod,
          totalRepayment: updateUser.totalRepayment,
          installment: updateUser.installment,
          status: updateUser.status,
        },
      };
      const result = await loanCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.get("/api/fetchLikedVideos/:userEmail", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = likeCollection.find(query);
      const ticket = await cursor.toArray();
      res.send(ticket);
    });

    // find details with id information
    app.get("/ticket/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ticketCollection.findOne(query);

      res.send(result);
    });

    app.get("/videos", async (req, res) => {
      const query = {};
      const cursor = videoCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    app.get("/comments", async (req, res) => {
      const query = {};
      const cursor = commentCollection.find(query);
      const video = await cursor.toArray();
      res.send(video);
    });
    // post for add confirm ticket
    app.post("/addVideo", async (req, res) => {
      const video = req.body;
      const result = await videoCollection.insertOne(video);
      res.send(result);
    });
    app.post("/addComment", async (req, res) => {
      const video = req.body;
      const result = await commentCollection.insertOne(video);
      res.send(result);
    });

    // post for add confirm ticket
    app.post("/addOrder", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.send(result);
    });

    app.get("/orders", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = orderCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    app.get("/myVideos", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = videoCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });
    app.get("/myFollow", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = followCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    app.post("/addClaim", async (req, res) => {
      const claims = req.body;

      const result = await claimCollection.insertOne(claims);

      res.send(result);
    });

    app.post("/addMessage", async (req, res) => {
      const review = req.body;
      const result = await messageCollection.insertOne(review);

      res.send(result);
    });

    app.get("/validateUserRole", async (req, res) => {
      const userEmail = req.query.email;

      try {
        // Find the user by email in your MongoDB user collection
        const user = await userCollection.findOne({ email: userEmail });

        if (user) {
          res.json({ userRole: user.userRole });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    });
    app.get("/validateAdminRole", async (req, res) => {
      const userEmail = req.query.email;

      try {
        // Find the user by email in your MongoDB user collection
        const user = await adminCollection.findOne({ email: userEmail });

        if (user) {
          res.json({ userRole: user.userRole });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    });

    // find ticket email query
    app.get("/myTicket", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = ticketCollection.find(query);
      const ticket = await cursor.toArray();
      res.send(ticket);
    });
    // find trip email query
    app.get("/myTrip", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = driverCollection.find(query);
      const ticket = await cursor.toArray();
      res.send(ticket);
    });
    // find ticket bus query
    app.get("/busTicket", async (req, res) => {
      const busNo = parseInt(req.query.busNo);

      const query = { busNo: busNo };
      const cursor = ticketCollection.find(query);
      const ticket = await cursor.toArray();
      res.send(ticket);
    });

    // get method for users with role query
    app.get("/drivers", async (req, res) => {
      const role = req.query.role;
      const query = { role: role };
      const users = await userCollection.find(query).toArray();
      res.send(users);
    });
    // post for users method
    app.post("/drivers", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    // post for wallet users method
    app.post("/addUsers", async (req, res) => {
      const user = req.body;
      const result = await walletCollection.insertOne(user);
      res.send(result);
    });
    app.post("/admin", async (req, res) => {
      const user = req.body;
      const result = await adminCollection.insertOne(user);
      res.send(result);
    });

    app.put("/claim/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: updateUser.status,
        },
      };
      const result = await claimCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.put("/myticket/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: updateUser.status,
          secret: updateUser.secret,
        },
      };
      const result = await ticketCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
    app.put("/adminApprove/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: updateUser.status,
        },
      };
      const result = await managerCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.put("/incrementView", async (req, res) => {
      const { videoId, email } = req.body;
      console.log(email);
      console.log(videoId);

      try {
        // Check if the video with the specified _id and user email exists
        const video = await videoCollection.findOne({
          _id: new ObjectId(videoId),
          // email: email,
        });

        if (!video) {
          return res.status(404).json({
            error: "Video not found or user does not have permission",
          });
        }

        // Increment the views count for the video
        const result = await videoCollection.updateOne(
          { _id: new ObjectId(videoId) },
          { $inc: { views: 1 } }
        );

        if (result.modifiedCount === 0) {
          return res
            .status(500)
            .json({ error: "Failed to update views count" });
        }

        res.json({
          success: true,
          message: "View count incremented successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.put("/addComment", async (req, res) => {
      const { comment, videoId } = req.body;
      console.log(comment, videoId);

      try {
        // Update the comment count for the video with the specified _id
        const result = await videoCollection.updateOne(
          { _id: new ObjectId(videoId) },
          { $inc: { comment: 1 } } // Increment the comments field by 1
        );

        console.log(result);

        if (result.modifiedCount === 0) {
          return res.status(404).json({ error: "Video not found" });
        }

        res.json({ success: true, message: "Comment added successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Erp Soft app is running");
});

httpServer.listen(PORT, () => {
  console.log(`Erp Server listening on ${PORT}`);
});
