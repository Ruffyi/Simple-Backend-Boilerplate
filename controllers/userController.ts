import { Request, Response } from 'express';
import User from './../model/userModel';

const getAllUsers = async (req: Request, res: Response) => {
	const users = await User.find({});

	res.send({
		message: 'All users',
		users,
	});
};

export { getAllUsers };
