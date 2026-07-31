/* Import des modules CSS */
import css from "./carteMentale.module.css";

import { memo } from "react";
import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    Handle,
    Position,
    type Node,
    type Edge,
    type NodeProps,
    type NodeTypes,
} from "@xyflow/react";

/* Style structurel obligatoire de React Flow */
import "@xyflow/react/dist/style.css";

// ==========================================
// 1. TYPAGE TS DES DONNÉES
// ==========================================
interface WeddingData extends Record<string, unknown> {
    label: string;
    imageUrl?: string;
}

type WeddingNode = Node<WeddingData, "center" | "category">;

// ==========================================
// 2. COMPOSANTS NŒUDS PERSONNALISÉS
// ==========================================

// Le Nœud Central avec image intégrée
const CenterNode = memo(({ data }: NodeProps<WeddingNode>) => {
    return (
        <div className={css.weddingCenterCard}>
            {data.imageUrl && (
                <div className={css.centerImageWrapper}>
                    <img src={data.imageUrl} alt={data.label} className={css.centerImage} />
                </div>
            )}
            <div className={css.centerContent}>
                <strong>{data.label}</strong>
            </div>

            {/* Sorties flèches aux 4 directions */}
            <Handle type="source" position={Position.Top} id="top" className={css.weddingHandle} />
            <Handle type="source" position={Position.Bottom} id="bottom" className={css.weddingHandle} />
            <Handle type="source" position={Position.Left} id="left" className={css.weddingHandle} />
            <Handle type="source" position={Position.Right} id="right" className={css.weddingHandle} />
        </div>
    );
});
CenterNode.displayName = "CenterNode";

// Les Bulles Catégories (Classiques/Épurées)
const CategoryNode = memo(({ data }: NodeProps<WeddingNode>) => {
    return (
        <div className={css.weddingCategory}>
            <span>{data.label}</span>
            {/* Entrées multi-directions */}
            <Handle type="target" position={Position.Left} id="in-left" className={css.weddingHandle} />
            <Handle type="target" position={Position.Right} id="in-right" className={css.weddingHandle} />
            <Handle type="target" position={Position.Top} id="in-top" className={css.weddingHandle} />
            <Handle type="target" position={Position.Bottom} id="in-bottom" className={css.weddingHandle} />
        </div>
    );
});
CategoryNode.displayName = "CategoryNode";

const nodeTypes: NodeTypes = {
    center: CenterNode,
    category: CategoryNode,
};

// ==========================================
// 3. ARCHITECTURE DE LA CARTE MARIAGE
// ==========================================
const initialNodes: WeddingNode[] = [
    {
        id: "root",
        type: "center",
        data: {
            label: "💍 Votre Mariage",
            imageUrl: "/images/image-prestation-card/mariage.jpg",
        },
        position: { x: 400, y: 250 },
    },
    {
        id: "preparatifs",
        type: "category",
        data: { label: "✨ Préparatifs" },
        position: { x: 435, y: 60 },
    },
    {
        id: "photos-couple",
        type: "category",
        data: { label: "📸 Photo de couple" },
        position: { x: 720, y: 180 },
    },
    {
        id: "reception",
        type: "category",
        data: { label: "🥂 Réception" },
        position: { x: 700, y: 400 },
    },
    {
        id: "decors",
        type: "category",
        data: { label: "🌸 Décors" },
        position: { x: 140, y: 180 },
    },
    {
        id: "photos-invites",
        type: "category",
        data: { label: "🎉 Photos des invités" },
        position: { x: 120, y: 400 },
    },
];

// ==========================================
// 4. LIAISONS ET TYPES DE LIGNES
// ==========================================
const initialEdges: Edge[] = [
    {
        id: "e-preparatifs",
        source: "root",
        sourceHandle: "top",
        target: "preparatifs",
        targetHandle: "in-bottom",
        type: "smoothstep",
        animated: true,
        style: { stroke: "#d4b2a7", strokeWidth: 2 },
    },
    {
        id: "e-photos-couple",
        source: "root",
        sourceHandle: "right",
        target: "photos-couple",
        targetHandle: "in-left",
        type: "default",
        style: { stroke: "#bca38b", strokeWidth: 2 },
    },
    {
        id: "e-reception",
        source: "root",
        sourceHandle: "right",
        target: "reception",
        targetHandle: "in-left",
        type: "default",
        style: { stroke: "#bca38b", strokeWidth: 2 },
    },
    {
        id: "e-decors",
        source: "root",
        sourceHandle: "left",
        target: "decors",
        targetHandle: "in-right",
        type: "default",
        style: { stroke: "#bca38b", strokeWidth: 2 },
    },
    {
        id: "e-photos-invites",
        source: "root",
        sourceHandle: "left",
        target: "photos-invites",
        targetHandle: "in-right",
        type: "default",
        style: { stroke: "#bca38b", strokeWidth: 2 },
    },
];

// ==========================================
// 5. RENDU DU COMPOSANT
// ==========================================
function CarteMentale_Component() {
    const [nodes, , onNodesChange] = useNodesState<WeddingNode>(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <section className={css.container}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                nodesDraggable={true}
                zoomOnDoubleClick={false}
            >
                <Background color="#f4efe9" gap={20} size={1} />
                <Controls position="bottom-left" showInteractive={false} />
            </ReactFlow>
        </section>
    );
}

export { CarteMentale_Component };
