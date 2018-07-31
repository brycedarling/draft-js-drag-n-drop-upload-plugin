import handleDroppedFiles from "./handleDroppedFiles";

function createDndFileUploadPlugin(config) {
  return {
    // Handle file drops
    handleDroppedFiles: handleDroppedFiles(config || {}),
  };
}

export default createDndFileUploadPlugin;
