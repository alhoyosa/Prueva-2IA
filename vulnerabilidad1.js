// Vulnerabilidad: Inyección de comandos
const { exec } = require('child_process');

const userInput = "dir"; // Simulando entrada controlada
exec(userInput, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Resultado:\n${stdout}`);
});
