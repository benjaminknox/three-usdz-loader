/**
 * Read a file async and returns an array buffer
 * @param file
 * @returns
 */
export async function readFileAsync(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

/**
 * Generate random string GUID
 */
export function getRandomGuid(): string {
  return (Math.random() + 1).toString(36).substring(7);
}

/**
 * Given a file name / path, returns the file extension
 * @param filePath
 * @returns
 */
export function getFileExtension(filePath: string): string {
  let extension = filePath.split('.').pop();
  if (extension == undefined) {
    throw 'Cannot determine extension';
  }
  extension = extension.split('?')[0];
  return extension;
}
