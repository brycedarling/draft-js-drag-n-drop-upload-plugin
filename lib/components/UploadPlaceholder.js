import React, { Component } from "react";

class UploadPlaceholder extends Component {
  render() {
    const { blockProps, block } = this.props;

    const offsetKey = block.get("key") + "-0-0";

    return (
      <span contentEditable={false} data-offset-key={offsetKey}>
        ![Uploading {blockProps.name}...](){" "}
      </span>
    );
  }
}

export default UploadPlaceholder;
