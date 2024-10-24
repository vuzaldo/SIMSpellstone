import { readFileSync } from 'fs';
import { join } from 'path';
import { getRootDir } from '../../../common/rootDir.mjs';

const scriptDir = join(getRootDir(), './scripts/data/');
const xmlDir = join(getRootDir(), './cards/');

export function getScriptFromGithub(scriptName) {
    const scriptPath = join(scriptDir, scriptName);
    return readFileSync(scriptPath, 'utf8');
}

export function getXmlFromGithub(xmlName) {
    const xmlPath = join(xmlDir, xmlName);
    return readFileSync(xmlPath, 'utf8');
}
