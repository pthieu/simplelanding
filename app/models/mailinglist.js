// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MailingListSchema = new Schema({
  email: String
});

MailingListSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('MailingList', MailingListSchema);

