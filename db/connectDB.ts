import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToMongoDB = async () => {
	try {
		await connect(
			process.env.MONGODB_URL?.replace(
				'<PASSWORD>',
				process.env.MONGODB_PASSWORD as string
			)
		);
		console.log('Connected with DB : success');
	} catch (err) {
		return err;
	}
};

export default connectToMongoDB;
