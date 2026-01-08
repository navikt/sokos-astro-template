import type {
	EmployeeListeSchema,
	EmployeeSchema,
} from "@schema/EmployeeSchema";
import type { z } from "zod";

export type EmployeeList = z.infer<typeof EmployeeListeSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;
