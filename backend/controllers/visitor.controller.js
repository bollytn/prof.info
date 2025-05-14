import { Visitors } from "../models/visitor.model.js";

export const addVisitor = async (req, res) => {
  const { ip, location, userAgent } = req.body;

  // Optional: Basic input validation
  if (!ip || !location || !userAgent) {
    return res.status(400).json({ message: "Missing required fields: ip, location, userAgent" });
  }

  try {
    let visitorRecord = await Visitors.findOne({ ip }); // Use a different variable name to avoid confusion

    if (visitorRecord) {
        // Existing visitor
        visitorRecord.viewacount += 1;
        await visitorRecord.save();
    } else {
        // New visitor
        visitorRecord = new Visitors({ // Assign the new visitor to visitorRecord
            ip,
            location,
            userAgent,
            // viewacount will default to 1 as per your schema
        });
        await visitorRecord.save();
    }
    // Now, visitorRecord will always hold the actual visitor document (either updated or new)
    res.status(200).json({ message: "Visitor added successfully", visitor: visitorRecord });
  } catch (error) {
    console.error("Error in addVisitor:", error); // Log with more context
    // Optional: Handle Mongoose validation errors specifically
    if (error.name === 'ValidationError') {
        return res.status(400).json({ message: "Validation Error", errors: error.errors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
} 

export const getVisitors = async (req, res) => {
    try {
        const visitors = await Visitors.find();
        const totalVisitors = await Visitors.countDocuments();
        const totalVisits = visitors.reduce((acc, visitor) => acc + visitor.viewacount, 0);
        const topVisitor = await Visitors.findOne().sort({ viewacount: -1 }).limit(1);
        const topDay = 682
        res.status(200).json({ visitors, totalVisitors, totalVisits, topVisitor , topDay });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
    }