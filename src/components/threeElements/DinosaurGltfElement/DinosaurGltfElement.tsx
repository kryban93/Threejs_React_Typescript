/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
	nodes: {
		Geo_Dinosaur: THREE.Mesh;
	};
	materials: {
		lambert2SG: THREE.MeshStandardMaterial;
	};
};

export default function Model(props: JSX.IntrinsicElements['group']) {
	const group = useRef<THREE.Group>();
	const { nodes, materials } = useGLTF('/T-Rex.glb') as any;
	return (
		<group ref={group} {...props} dispose={null} scale={[0.07, 0.07, 0.07]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Geo_Dinosaur.geometry}
				material={materials.lambert2SG}
			/>
		</group>
	);
}

useGLTF.preload('/T-Rex.glb');
