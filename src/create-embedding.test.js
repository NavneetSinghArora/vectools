import { test } from 'node:test';
import assert from 'node:assert';
import { getEmbedding } from './create-embedding.js';

test('getEmbedding returns a numeric array of the correct length', async () => {
    // Increase timeout for first run as it might download the model
    const text = 'Hello world';
    const embedding = await getEmbedding(text);

    // Assert: it is an array
    assert.ok(Array.isArray(embedding), 'Embedding should be an array');
    
    // Assert: it has the correct length for all-MiniLM-L6-v2 (384)
    assert.strictEqual(embedding.length, 384, 'MiniLM-L6-v2 should return 384 dimensions');
    
    // Assert: all elements are numbers and not NaN
    assert.ok(embedding.every(val => typeof val === 'number' && !isNaN(val)), 'Every element should be a valid number');
});

test('getEmbedding returns different embeddings for different texts', async () => {
    const text1 = 'The quick brown fox';
    const text2 = 'Jumped over the lazy dog';
    
    const embed1 = await getEmbedding(text1);
    const embed2 = await getEmbedding(text2);
    
    // Assert: they are not the same
    assert.notDeepStrictEqual(embed1, embed2, 'Different texts should produce different embeddings');
});
