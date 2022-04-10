import { model, Model, Schema } from 'mongoose';

const userSchema = new Schema({
	name: {
		type: String,
	},
});

const User = model('User', userSchema);

export default User;
