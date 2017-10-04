const mongoose = require('mongoose');

// schema
const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    description: {
        type: String
    },
    links: {
        project: {
            type: String,
            match: /(https?:\/\/)?(www)?[a-zA-Z0-9./]*[.][a-zA-Z0-9./]*/gi
        },
        source: {
            type: String,
            match: /(https?:\/\/)?(www)?[a-zA-Z0-9./]*[.][a-zA-Z0-9./]*/gi
        },
        video: {
            type: String,
            match: /(https?:\/\/)?(www)?[a-zA-Z0-9./]*[.][a-zA-Z0-9./]*/gi
        }
    },
    screenshots: [{
        caption: {
            type: String
        },
        url: {
            type: String,
            match: /(https?:\/\/)?(www)?[a-zA-Z0-9./]*[.][a-zA-Z0-9./]*/gi
        }
    }],
    tags: [{
        type: String,
        trim: true,
        match: /^[a-zA-Z0-9]+$/
    }],
    mobileFriendly: {
        type: Boolean,
        default: false
    },
    featured: {
        type: Boolean,
        default: true
    },
    public: {
        type: Boolean,
        default: true
    },
    ts: {
        type: Date,
        default: Date.now
    }
});

// export schema
const Project = module.exports = mongoose.model('Project', projectSchema, 'projects');

// get projects
module.exports.getProjects = function(itemsPerPage, currentPage, featured, callback) {
    let query = {};
    if (featured == 'true') {
        query.featured = true;
    }
    const currPage = Number(currentPage) || 1;
    const perPage = Number(itemsPerPage) || 10;
    Project.find(query)
        .sort({ 'ts': 'desc' })
        .skip(perPage * (currPage - 1))
        .limit(perPage)
        .exec(callback);
};

// get project by id
module.exports.getProjectById = function(projectId, callback) {
    Project.findById(projectId, callback);
};

// get projects by tag
module.exports.getProjectsByTag = function(tag, itemsPerPage, currentPage, callback) {
    const currPage = Number(currentPage) || 1;
    const perPage = Number(itemsPerPage) || 10;
    Project.find({ tag })
        .sort({ 'ts': 'desc' })
        .skip(perPage * (currPage - 1))
        .limit(perPage)
        .exec(callback);
};
