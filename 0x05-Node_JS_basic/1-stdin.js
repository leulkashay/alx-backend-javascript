process.stdin.setEncoding('UTF-8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
    const entry = process.stdin.read();
    if (entry !== null ) {
	process.stdout.write(`Your name is: ${entry}`);
    }
});

if (!process.stdin.isTTY) {
    process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
    });
}
