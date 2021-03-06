import * as three from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
	nodes: {
		PUSHILIN_Plane_Circle000: THREE.Mesh;
	};
	materials: {
		plane: THREE.MeshStandardMaterial;
	};
};

export default function AirplaneGltfElement(
	props: JSX.IntrinsicElements['group'],
) {
	const group = useRef<three.Group>();
	const { nodes, materials } = useGLTF('/Airplane.glb') as any;
	return (
		<group ref={group} {...props} dispose={null} scale={[8, 8, 8]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
				material={materials.plane}
			/>
		</group>
	);
}

useGLTF.preload('/Airplane.glb');
