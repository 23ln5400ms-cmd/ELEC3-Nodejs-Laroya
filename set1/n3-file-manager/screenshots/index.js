
// Name: HEART LAROYA
// Section: IV-BSIT B
// Activity: N3 - File Manager with fs and path
// Date: November 27, 2026

const fs = require("fs");
const path = require("path");

const filesDirectory = path.join(__dirname, "files");

if (!fs.existsSync(filesDirectory)) {
    fs.mkdirSync(filesDirectory);
}

function getFilePath(fileName) {
    if (!fileName || path.basename(fileName) !== fileName) {
        throw new Error("Please provide a valid file name.");
    }

    if (path.extname(fileName).toLowerCase() !== ".txt") {
        throw new Error("Only .txt files are allowed.");
    }

    return path.join(filesDirectory, fileName);
}

function createFile(fileName, content) {
    try {
        const filePath = getFilePath(fileName);

        if (fs.existsSync(filePath)) {
            console.log("File already exists.");
            return;
        }

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`File created successfully: ${fileName}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

function readFile(fileName) {
    try {
        const filePath = getFilePath(fileName);

        if (!fs.existsSync(filePath)) {
            console.log("File does not exist.");
            return;
        }

        const content = fs.readFileSync(filePath, "utf8");

        console.log(`\nFile Name: ${fileName}`);
        console.log("File Contents:");
        console.log(content);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

function updateFile(fileName, content) {
    try {
        const filePath = getFilePath(fileName);

        if (!fs.existsSync(filePath)) {
            console.log("File does not exist. Cannot update.");
            return;
        }

        fs.appendFileSync(filePath, "\n" + content, "utf8");

        console.log(`File updated successfully: ${fileName}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

function deleteFile(fileName) {
    try {
        const filePath = getFilePath(fileName);

        if (!fs.existsSync(filePath)) {
            console.log("File does not exist. Cannot delete.");
            return;
        }

        fs.unlinkSync(filePath);

        console.log(`File deleted successfully: ${fileName}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

function listFiles() {
    try {
        const fileNames = fs.readdirSync(filesDirectory);

        if (fileNames.length === 0) {
            console.log("No files found.");
            return;
        }

        console.log("\n===== FILE MANAGER LIST =====");

        fileNames.forEach((fileName) => {
            const filePath = path.join(filesDirectory, fileName);

            if (fs.statSync(filePath).isFile()) {
                const content = fs.readFileSync(filePath, "utf8");

                console.log("\nFull Path:", filePath);
                console.log("File Name:", path.basename(filePath));
                console.log("Extension:", path.extname(filePath));
                console.log("Contents:", content);
                console.log("-----------------------------");
            }
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

switch (command) {
    case "create":
        if (!fileName || !content) {
            console.log('Usage: node index.js create notes.txt "Hello"');
        } else {
            createFile(fileName, content);
        }
        break;

    case "read":
        if (!fileName) {
            console.log("Usage: node index.js read notes.txt");
        } else {
            readFile(fileName);
        }
        break;

    case "update":
        if (!fileName || !content) {
            console.log('Usage: node index.js update notes.txt "New text"');
        } else {
            updateFile(fileName, content);
        }
        break;

    case "delete":
        if (!fileName) {
            console.log("Usage: node index.js delete notes.txt");
        } else {
            deleteFile(fileName);
        }
        break;

    case "list":
        listFiles();
        break;

    default:
        console.log("Invalid command.");
        console.log("\nAvailable Commands:");
        console.log('node index.js create notes.txt "Hello"');
        console.log("node index.js read notes.txt");
        console.log('node index.js update notes.txt "New text"');
        console.log("node index.js delete notes.txt");
        console.log("node index.js list");
}
