import { test } from 'node:test';
import assert from 'node:assert';
import { cosineSimilarity } from './cosine-similarity.js';

/** 
 * Tests the cosine similarity function for identical vectors
 * Should return 1 as the vectors are the same
*/
test('cosine similarity of identical vectors should be 1', () => {
    // Arrange
    const vec1 = [1, 2, 3];
    const vec2 = [1, 2, 3];

    // Act & Assert
    const result = cosineSimilarity(vec1, vec2);

    // Assert: Check if the result is close to 1 within a tolerance of 0.00001
    assert.ok(Math.abs(result - 1.0) < 0.00001);
});

/** 
 * Tests the cosine similarity function for completely opposite vectors
 * Should return -1 as the vectors are completely opposite
*/
test('cosine similarity of completely opposite vectors should be -1', () => {
    // Arrange
    const vec1 = [1, 2, 3];
    const vec2 = [-1, -2, -3];

    // Act & Assert
    const result = cosineSimilarity(vec1, vec2);

    // Assert: Check if the result is close to -1 within a tolerance of 0.00001
    assert.ok(Math.abs(result - (-1.0)) < 0.00001);
});

/**
 * Tests the cosine similarity function for orthogonal (perpendicular) vectors
 * Should return 0 as the vectors are orthogonal
 */
test('cosine similarity of orthogonal (perpendicular) vectors should be 0', () => {
    // Arrange
    const vec1 = [1, 0];
    const vec2 = [0, 1];

    // Act & Assert
    const result = cosineSimilarity(vec1, vec2);

    // Assert: Check if the result is exactly 0 as the vectors are orthogonal
    assert.strictEqual(result, 0);
});

/**
 * Tests the cosine similarity function for vectors of different lengths
 * Should throw an error as the vectors are of different lengths
 */
test('throws an error if vectors are different lengths', () => {
    // Arrange
    const vec1 = [1, 2, 3];
    const vec2 = [1, 2];

    // Act & Assert: Expect an error to be thrown
    assert.throws(() => {
        cosineSimilarity(vec1, vec2);
    }, Error);
});
