import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function parseStructureFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');
    const structure = {};
    
    let currentSection = '';
    
    for (const line of lines) {
      // Skip empty lines
      if (!line.trim()) continue;
      
      // Skip comments
      if (line.trim().startsWith('#')) {
        currentSection = line.trim().slice(1).trim();
        continue;
      }
      
      // Process file/directory paths
      const trimmedLine = line.trim();
      if (trimmedLine) {
        // Remove leading slash if present
        const normalizedPath = trimmedLine.startsWith('/') 
          ? trimmedLine.slice(1) 
          : trimmedLine;
          
        // Split the path into parts
        const parts = normalizedPath.split('/');
        let current = structure;
        
        // Build nested structure
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (i === parts.length - 1) {
            // It's a file
            current[part] = '';
          } else {
            // It's a directory
            current[part] = current[part] || {};
            current = current[part];
          }
        }
      }
    }
    
    return structure;
  } catch (error) {
    console.error('Error parsing structure file:', error);
    throw error;
  }
}

async function createDirectoryStructure(basePath, structure) {
  for (const [name, content] of Object.entries(structure)) {
    const currentPath = path.join(basePath, name);
    
    try {
      if (typeof content === 'object') {
        // If it's a directory
        await fs.mkdir(currentPath, { recursive: true });
        console.log(`Created directory: ${currentPath}`);
        await createDirectoryStructure(currentPath, content);
      } else {
        // If it's a file
        const exists = await fs.access(currentPath).then(() => true).catch(() => false);
        if (!exists) {
          await fs.writeFile(currentPath, '');
          console.log(`Created file: ${currentPath}`);
        } else {
          console.log(`File already exists: ${currentPath}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${currentPath}:`, error);
    }
  }
}

async function main() {
  try {
    console.log('Reading structure file...');
    const structure = await parseStructureFile('./structure.txt');
    
    console.log('Starting project structure setup...');
    await createDirectoryStructure(process.cwd(), structure);
    console.log('Project structure setup completed successfully!');
  } catch (error) {
    console.error('Failed to set up project structure:', error);
    process.exit(1);
  }
}

main();