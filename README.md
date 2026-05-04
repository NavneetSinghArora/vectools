# vectools

![npm version](https://img.shields.io/npm/v/vectools)
![License](https://img.shields.io/npm/l/vectools)

A lightweight, zero-dependency utility library for vector mathematics and AI embeddings. 

Currently, it provides an optimized function to calculate the **cosine similarity** between two numeric arrays. Perfect for comparing vector embeddings in RAG (Retrieval-Augmented Generation) pipelines, machine learning applications, and semantic search!

## Features

- 🪶 **Zero dependencies**: Extremely lightweight.
- 🚀 **Fast**: Optimized for performance with native array methods.
- 📦 **ESM Support**: Built with modern ES Modules.
- 🛡️ **Safe**: Includes runtime type checking to prevent silent errors.

## Installation

You can install `vectools` using your favorite package manager:

```bash
# Using npm
npm install vectools

# Using yarn
yarn add vectools

# Using pnpm
pnpm add vectools
```

## Usage

Calculate the cosine similarity between two numeric arrays. The output is a score between `-1` (completely opposite) and `1` (identical), with `0` indicating orthogonal (perpendicular) vectors.

```javascript
import { cosineSimilarity } from 'vectools';

// Example 1: Highly similar vectors
const vecA = [1, 2, 3];
const vecB = [1, 2, 4];

const similarity = cosineSimilarity(vecA, vecB);
console.log(similarity); 
// Output: 0.9914601339836674

// Example 2: Orthogonal vectors
const vecC = [1, 0];
const vecD = [0, 1];

console.log(cosineSimilarity(vecC, vecD)); 
// Output: 0

// Example 3: Completely opposite vectors
const vecE = [1, 2, 3];
const vecF = [-1, -2, -3];

console.log(cosineSimilarity(vecE, vecF)); 
// Output: -1
```

### Error Handling

The function includes built-in validations. It will throw errors if the vectors are not arrays or if they differ in length:

```javascript
import { cosineSimilarity } from 'vectools';

// Throws Error: Vectors must be of the exact same length
cosineSimilarity([1, 2], [1, 2, 3]);

// Throws TypeError: Both arguments must be arrays of numbers
cosineSimilarity("not an array", [1, 2, 3]);
```

## API Reference

### `cosineSimilarity(vec1: number[], vec2: number[]): number`

Calculates the cosine similarity between `vec1` and `vec2`.

- **`vec1`** (`number[]`): The first vector.
- **`vec2`** (`number[]`): The second vector.
- **Returns** (`number`): The cosine similarity score, ranging from `-1` to `1`.

## Tags

`vector`, `math`, `embeddings`, `cosine-similarity`, `ai`, `rag`, `machine-learning`, `distance`

## License

[MIT](./LICENSE) © Navneet Singh Arora
