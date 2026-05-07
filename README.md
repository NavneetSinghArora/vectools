# vectools

[![npm version](https://img.shields.io/npm/v/vectools)](https://www.npmjs.com/package/vectools)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/vectools)
[![License](https://img.shields.io/npm/l/vectools)](https://www.npmjs.com/package/vectools)

A lightweight utility library for vector mathematics and local AI embeddings. 

`vectools` provides optimized functions for vector operations and generating high-quality embeddings locally using HuggingFace Transformers. Perfect for RAG (Retrieval-Augmented Generation) pipelines, semantic search, and machine learning applications.

## Features

- 🚀 **Fast**: Optimized for performance with native array methods.
- 🤖 **Local-first AI**: Generate embeddings directly on your machine (no API keys needed).
- 📦 **ESM Support**: Built with modern ES Modules.
- 🛡️ **Safe**: Includes runtime type checking to prevent silent errors.
- 🪶 **Lightweight**: Minimal dependencies and small bundle size.

## Installation

```bash
npm install vectools
```

## Usage

### 1. Vector Similarity
Calculate the cosine similarity between two numeric arrays. The score ranges from `-1` (opposite) to `1` (identical).

```javascript
import { cosineSimilarity } from 'vectools';

const vecA = [1, 2, 3];
const vecB = [1, 2, 4];

const similarity = cosineSimilarity(vecA, vecB);
console.log(similarity); // ~0.991
```

### 2. Local Embeddings
Generate vector embeddings locally using the MiniLM model (fast and accurate).

```javascript
import { getEmbedding } from 'vectools';

const vector = await getEmbedding("Hello world!");
console.log(vector); // [0.012, -0.045, ...]
```

---

## API Reference

### `cosineSimilarity(vec1: number[], vec2: number[]): number`
Calculates the cosine similarity between two numeric arrays.
- Throws an error if vectors have different lengths.
- Throws a TypeError if arguments are not numeric arrays.

### `getEmbedding(text: string): Promise<number[]>`
Generates a 384-dimensional vector embedding for the input text.
- Uses the `Xenova/all-MiniLM-L6-v2` model.
- Uses a singleton pattern to keep the model in memory for fast subsequent calls.

## License

[MIT](./LICENSE) © Navneet Singh Arora
