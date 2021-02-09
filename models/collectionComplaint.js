var mongoose= require('mongoose');

const Schema= mongoose.Schema;

const complaintSchema = new Schema ({
     fname: { type: String},
     lname: { type: String},
     email: { type: String},
     complaint: { type: String},

});

const collectionComplaint =mongoose.model('collectionComplaint', complaintSchema);

module.exports = collectionComplaint; 
