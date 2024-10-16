const Comic = require('../models/comic');

// Create a new comic
exports.createComic = async (req, res) => {
    try {
        const comic = new Comic(req.body);
        await comic.save();
        res.status(201).json(comic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all comics with pagination, filtering, and sorting
exports.getComics = async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'bookName', order = 'asc', ...filters } = req.query;
        
        const query = Comic.find(filters)
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));
        
        const comics = await query;
        const count = await Comic.countDocuments(filters);

        res.status(200).json({ comics, totalPages: Math.ceil(count / limit), currentPage: page });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a comic by ID
exports.getComicById = async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id);
        if (!comic) return res.status(404).json({ message: "Comic not found" });
        res.status(200).json(comic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a comic
exports.updateComic = async (req, res) => {
    try {
        const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comic) return res.status(404).json({ message: "Comic not found" });
        res.status(200).json(comic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a comic
exports.deleteComic = async (req, res) => {
    try {
        const comic = await Comic.findByIdAndDelete(req.params.id);
        if (!comic) return res.status(404).json({ message: "Comic not found" });
        
        res.status(200).json({ message: "Comic deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
