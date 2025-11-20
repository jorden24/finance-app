const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());



try {
    mongoose.connect(
    "mongodb+srv://hassanaaqil12_db_user:Jorden_24@dbhassan.dvquqjo.mongodb.net/new_finance?appName=dbhassan"
    
);console.log("connected mangodb")
} catch (error) {
   console.log("error server is not working") 
}

const financeSchema = new mongoose.Schema({
    title: String,
    amount: Number,
});

const Finance = mongoose.model("Finance", financeSchema);

app.get("/finances", async (req, res) => {
    try {
        const finances = await Finance.find();
        res.json(finances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/finances", async (req, res) => {
    const finance = new Finance({
        title: req.body.title,
        amount: req.body.amount,
    });
    const existingFinance = await Finance.findOne({ title: req.body.title });
    if (existingFinance) {
        return res.status(400).json({ message: "Finance with this title already exists." });
    }
    try {
        const newFinance = await finance.save();
        res.status(201).json(newFinance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete("/finances/:id", async (req, res) => {
    try {
        const deleted = await Finance.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Finance not found" });
        }

        res.json({ message: "Finance deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});const string = mongoose.Schema.Types.String;
