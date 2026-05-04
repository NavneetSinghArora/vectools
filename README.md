# vectools

A tiny, zero-dependency package to calculate the cosine similarity between two numeric arrays. Perfect for comparing vector embeddings!

## Installation

```bash
npm install vectools
```

## Usage

```javascript
import { cosineSimilarity } from 'vectools';

const vecA = [1, 2, 3];
const vecB = [1, 2, 4];

const similarity = cosineSimilarity(vecA, vecB);
console.log(similarity); // 0.9914601339836674
```
