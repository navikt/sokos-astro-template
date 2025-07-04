import { z } from "zod";
import { EmployeeListeSchema, EmployeeSchema } from "@src/types/schema/EmployeeSchema";

export type EmployeeList = z.infer<typeof EmployeeListeSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;
