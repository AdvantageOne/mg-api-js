import { Entity } from "./entity";
import { Rule } from "./rule";

type Recipient = {
	recipientType: "Email";
	address: string;
	notificationBinaryFile: { id: string };
	user: { id: string };
}

export interface DistributionList extends Entity {
	recipients: Recipient[];
	rules: Partial<Rule>[];
	name: string
}
