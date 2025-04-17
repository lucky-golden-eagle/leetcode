function groupAnagrams(strs: string[]): string[][] {
    const anagramGroups = new Map<string, string[]>();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (anagramGroups.has(sortedStr)) {
            anagramGroups.get(sortedStr)!.push(str);
        } else {
            anagramGroups.set(sortedStr, [str]);
        }
    }

    return Array.from(anagramGroups.values());
};