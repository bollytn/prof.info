import { Visitors } from "../models/visitor.model.js";

export const addVisitor = async (req, res) => {
  const { ip, location, userAgent } = req.body;
 
  try {
    const visitor = await Visitors.findOne({ ip });
    if (visitor) {
        visitor.viewacount += 1;
        await visitor.save();
    } else {
        const newVisitor = new Visitors({
            ip,
            location,
            userAgent,
        });
        await newVisitor.save();
    }
    res.status(200).json({ message: "Visitor added successfully", visitor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
} 

export const getVisitors = async (req, res) => {
    try {
        const visitors = await Visitors.find();
        const totalVisitors = await Visitors.countDocuments();
        const totalVisits = visitors.reduce((acc, visitor) => acc + visitor.viewacount, 0);
        const topVisitors = [...visitors].sort((a, b) => b.viewacount - a.viewacount).slice(0, 5);
        res.status(200).json({ visitors, totalVisitors, totalVisits, topVisitors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
    }