function reverseWords(s: string): string {
    return s.trim().split(/\s+/).filter(word => word !== "").reverse().join(" ");
};