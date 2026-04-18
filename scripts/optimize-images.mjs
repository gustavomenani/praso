import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageDir = path.resolve('public/assets/images');
const extensions = new Set(['.jpg', '.jpeg']);

async function optimizeImage(fileName) {
  const sourcePath = path.join(imageDir, fileName);
  const parsed = path.parse(fileName);
  const webpPath = path.join(imageDir, `${parsed.name}.webp`);
  const avifPath = path.join(imageDir, `${parsed.name}.avif`);

  await sharp(sourcePath).webp({ quality: 82 }).toFile(webpPath);
  await sharp(sourcePath).avif({ quality: 52 }).toFile(avifPath);

  return {
    sourcePath,
    webpPath,
    avifPath,
  };
}

async function run() {
  const entries = await fs.readdir(imageDir, { withFileTypes: true });
  const sourceFiles = entries
    .filter((entry) => entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort();

  if (!sourceFiles.length) {
    console.log('Nenhuma imagem JPEG encontrada em public/assets/images.');
    return;
  }

  const createdFiles = [];

  for (const fileName of sourceFiles) {
    const result = await optimizeImage(fileName);
    createdFiles.push(result.webpPath, result.avifPath);
    console.log(`Otimizada: ${result.sourcePath}`);
    console.log(`  -> ${result.webpPath}`);
    console.log(`  -> ${result.avifPath}`);
  }

  console.log(`\nConcluido: ${sourceFiles.length} imagem(ns) convertida(s).`);
  console.log(`Arquivos gerados: ${createdFiles.length}`);
}

run().catch((error) => {
  console.error('Falha ao otimizar imagens.');
  console.error(error);
  process.exit(1);
});
