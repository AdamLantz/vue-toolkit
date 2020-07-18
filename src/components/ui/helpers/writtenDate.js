export default function writtenDate(date) {
    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}