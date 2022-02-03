import { prisma } from "../prisma";
import { io } from "../app";

class GetLast3MessagesService {
	async execute() {
		const messages = await prisma.message.findMany({
			take: 3,
			orderBy: {
				created_at: "desc",
			},
			include: {
				user: true,
			},
		});
		 
		return messages;
	}
}
 export { GetLast3MessagesService };