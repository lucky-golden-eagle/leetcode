function simplifyPath(path: string): string {
    const segments = path.split('/');
    const stack: string[] = [];

    for (const segment of segments) {
        if (segment === '' || segment === '.') {
            continue;
        } else if (segment === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(segment);
        }
    }

    if (stack.length === 0) {
        return '/'; // Root directory
    } else {
        return '/' + stack.join('/');
    }
};