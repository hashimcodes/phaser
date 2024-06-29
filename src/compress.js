const compress_images = require("compress-images");
const fs = require('fs');

const BASE_PATH = './public/assets/textures/';
const INPUT_PATH = './public/assets/textures/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const OUTPUT_PATH = './public/assets/textures/compressed/COMPRESSED_';
const COMPRESSED_PATH = './public/assets/textures/compressed';

if(!fs.existsSync(BASE_PATH)) {
    console.log(`Textures Folder with this file path: ${BASE_PATH} is not existed`);
    process.exit();
}

if (fs.existsSync(COMPRESSED_PATH)) {
    console.log(`Deleting folder ${COMPRESSED_PATH}...`);
    fs.rmSync(COMPRESSED_PATH, { recursive: true });
    console.log(`Folder ${COMPRESSED_PATH} deleted successfully.`);
} else {
    console.log(`Folder ${COMPRESSED_PATH} does not exist.`);
}

compress_images(INPUT_PATH, OUTPUT_PATH, { compress_force: false, statistic: true, autoupdate: true }, false,
                { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                { svg: { engine: "svgo", command: "--multipass" } },
                { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } }, 
                (error, completed, statistic) => {
                    console.log("-------------");
                    console.log(error);
                    console.log(completed);
                    console.log(statistic);
                    console.log("-------------");
                }
);