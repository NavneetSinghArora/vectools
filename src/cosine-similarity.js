/**
 * Calculates the cosine similarity between two vectors.
 * 
 * @param {number[]} vec1 - The first vector
 * @param {number[]} vec2 - The second vector
 * @returns {number} The cosine similarity score (-1 to 1)
 */
export function cosineSimilarity(vec1, vec2) {
    // Validate inputs
    if (!Array.isArray(vec1) || !Array.isArray(vec2)) {
        throw new TypeError('Both arguments must be arrays of numbers');
    }

    // Validate vectors are of the same length
    if (vec1.length !== vec2.length) {
        throw new Error('Vectors must be of the exact same length');
    }

    // Handle empty vectors
    if (vec1.length === 0) return 0;

    // Calculate the dot product of the two vectors
    const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);

    // Calculate the magnitude (length) of each vector
    const magnitude1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
    const magnitude2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));

    // Handle zero vectors
    if (magnitude1 === 0 || magnitude2 === 0) return 0;

    // Calculate and return the cosine similarity
    return dotProduct / (magnitude1 * magnitude2);
}
