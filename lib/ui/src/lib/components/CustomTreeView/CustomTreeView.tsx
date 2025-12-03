import React, { useMemo } from 'react';
import TreeView, { INode, NodeId } from 'react-accessible-treeview';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Checkbox } from '../Checkbox';

export interface TreeNodeData {
  name: string;
  children?: TreeNodeData[];
  isSelected?: boolean;
  value?: string;
}

interface ProcessedTreeNode extends INode {
  name: string;
  isSelected?: boolean;
  value?: string;
}

export interface TreeViewProps {
  data: TreeNodeData[];
  onNodeSelect?: (nodeId: NodeId) => void;
  className?: string;
}

const processTreeData = (nodes: TreeNodeData[]): ProcessedTreeNode[] => {
  const processedNodes: ProcessedTreeNode[] = [];
  let nextId = 0;

  const processNode = (
    node: TreeNodeData,
    parentId: number | null = null
  ): number => {
    const currentId = nextId++;
    const childrenIds: number[] = [];

    if (node.children) {
      for (const child of node.children) {
        const childId = processNode(child, currentId);
        childrenIds.push(childId);
      }
    }

    processedNodes[currentId] = {
      id: currentId,
      name: node.name,
      children: childrenIds,
      parent: parentId,
      isSelected: node.isSelected,
      value: node.value,
    };

    return currentId;
  };

  for (const node of nodes) {
    processNode(node, null);
  }

  return processedNodes.filter((node) => node !== undefined);
};

const getCheckboxVariant = (
  isSelected: boolean | undefined,
  isExpanded: boolean
): 'checked' | 'indetermined' | 'unchecked' => {
  if (isSelected) {
    return 'checked';
  }
  if (isExpanded) {
    return 'indetermined';
  }
  return 'unchecked';
};

const CustomTreeView: React.FC<TreeViewProps> = ({
  data,
  onNodeSelect,
  className = '',
}) => {
  const processedData = useMemo(() => processTreeData(data), [data]);

  return (
    <div className={`w-full max-w-md ${className}`}>
      <TreeView
        data={processedData}
        aria-label="Tree View"
        onNodeSelect={({ element }) => onNodeSelect?.(element.id)}
        nodeRenderer={({
          element,
          isBranch,
          isExpanded,
          getNodeProps,
          level,
        }) => {
          const currentNode = element as ProcessedTreeNode;
          const indentLevel = level * 24;

          return (
            <div
              {...getNodeProps()}
              className={`py-1 relative group hover:bg-gray-50 pl-[${indentLevel}px]`}
            >
              {/* Tree connection lines */}
              {level > 0 && (
                <>
                  {/* Vertical lines for all parent levels */}
                  {Array.from({ length: level }).map((_, index) => (
                    <div
                      key={`vline-${index}`}
                      className={`absolute w-px bg-gray-300 left-[${
                        (index + 1) * 24 - 12
                      }px] top-0 bottom-0`}
                    />
                  ))}
                  {/* Horizontal connection to current item */}
                  <div
                    className={`absolute h-px bg-gray-300 left-[${
                      indentLevel - 12
                    }px] w-[12px] top-[14px]`}
                  />
                </>
              )}

              {/* Content wrapper */}
              <div className="flex flex-col gap-0.5">
                {/* First row with icon and name */}
                <div className="flex items-center gap-1">
                  {/* Chevron */}
                  <div className="w-6 flex-shrink-0">
                    {isBranch && (
                      <span className="flex items-center justify-center">
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Icon and name */}
                  <div className="flex items-center gap-2">
                    <Checkbox
                      variant={getCheckboxVariant(
                        currentNode.isSelected,
                        isExpanded
                      )}
                      label={currentNode.name}
                      onClick={() => {}}
                    />
                  </div>
                </div>

                {/* Value row */}
                {currentNode.value && (
                  <div className="pl-[58px] text-sm text-gray-500">
                    {currentNode.value}
                  </div>
                )}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export { CustomTreeView };
