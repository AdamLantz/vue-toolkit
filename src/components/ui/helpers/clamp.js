/**
 * Clamps a number within bounds
 * @param {*} n number to clamp
 * @param {*} min lower bound
 * @param {*} max upper bound
 */
export default function clamp(n, min, max) {
    return Math.max(Math.min(n, Math.max(min, max)), Math.min(min, max));
}