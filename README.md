# magnoli-types

TypeScript type definitions and Zod schemas for Magnoli's core business entities.

## Installation

```bash
npm install magnoli-types
# or
yarn add magnoli-types
# or
pnpm add magnoli-types
```

## Features

- Type definitions for all Magnoli business entities
- Zod schemas for runtime type validation
- Full TypeScript support
- Zero runtime dependencies (except for Zod)
- Tree-shakeable exports

## Usage

Import types and schemas as needed:

```typescript
import { Employee, EmployeeSchema } from "magnoli-types";

// Use types in your TypeScript code
const employee: Employee = {
  // ... employee data
};

// Validate data at runtime using Zod schemas
const validatedEmployee = EmployeeSchema.parse(employee);
```

## Available Types and Schemas

The package includes types and schemas for:

- Auth
- Business Segments
- Clocked Shifts
- Customers
- Default Breaks
- Departments
- Employees
- Employment Types
- Locations
- Magnoli Users
- Positions
- Refresh Tokens
- Scheduled Shifts
- Common

Each entity comes with both TypeScript types and Zod schemas for runtime validation.
