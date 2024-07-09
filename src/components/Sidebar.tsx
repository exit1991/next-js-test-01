import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaFile } from 'react-icons/fa';
import { FolderNode, FileNode } from '../data/fileStructure';

type NodeProps = {
  node: FolderNode | FileNode;
};

function FileNodeComponent({ node }: NodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (node.type === 'folder') {
    return (
      <ul>
        <div
          className="flex gap-1.5 items-center my-2"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer' }}
        >
          {isOpen ? <FaFolderOpen /> : <FaFolder />} {node.name}
        </div>
        {isOpen && (
          <div className="pl-8">
            {node.children.map((childNode, index) => (
              <FileNodeComponent key={index} node={childNode} />
            ))}
          </div>
        )}
      </ul>
    );
  } else {
    return (
      <ul className="flex gap-1.5 items-center my-2">
        <FaFile /> {node.name}
      </ul>
    );
  }
}

type SidebarProps = {
  structure: Array<FolderNode | FileNode>;
};

export default function Sidebar({ structure }: SidebarProps) {
  return (
    <div style={{ width: '250px', borderRight: '1px solid #ddd' }}>
      {structure.map((node, index) => (
        <FileNodeComponent key={index} node={node} />
      ))}
    </div>
  );
}
