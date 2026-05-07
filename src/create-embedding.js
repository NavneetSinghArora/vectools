import { pipeline } from '@huggingface/transformers';

let extractor = null;

/**
 * Generates a vector embedding for a given string.
 * Uses a singleton pattern to keep the model in memory.
 */
export async function getEmbedding(text) {
    if (!extractor) {
        // We use MiniLM because it is fast and accurate for search
        extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }

    const output = await extractor(text, {
        pooling: 'mean',
        normalize: true,
    });

    // Convert the Tensor data to a standard JavaScript Array
    return Array.from(output.data);
}