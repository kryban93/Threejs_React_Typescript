import { useState, useEffect, useRef } from 'react';
import * as three from 'three';
import { useFrame } from '@react-three/fiber';
import changeToRadians from '../../../additional/changeToRadians';
import BoxElement from '../BoxElement/BoxElement';

export default function BoxRing({
	count = 20,
	radius = 20,
	color = '#cac',
	size = 1,
	direction = 'left',
}: BoxRingProps) {
	const boxRingRef = useRef<three.Group>();
	const [boxesPosition, setBoxesPosition] = useState<stateProps[]>([]);
	useEffect(() => {
		createRings();
	}, []);

	useFrame(() => {
		if (boxRingRef.current) {
			direction === 'left'
				? (boxRingRef.current!.rotation.y += 0.01)
				: (boxRingRef.current!.rotation.y -= 0.01);
		}
	});

	function createRings() {
		const boxArray = [];
		for (let i = 0; i < count; i += 1) {
			const length = 360 / count;
			const radialPosition = changeToRadians(length * i);
			const distance = radius * 2;
			const sinus = Math.sin(radialPosition) * distance;
			const cosinus = Math.cos(radialPosition) * distance;

			boxArray.push({ sinus, cosinus, radialPosition });
		}
		setBoxesPosition(boxArray);
	}

	return (
		<group castShadow ref={boxRingRef}>
			{boxesPosition.map((boxItem) => (
				<BoxElement
					xPosition={boxItem.sinus}
					zPosition={boxItem.cosinus}
					yRotation={boxItem.radialPosition}
					color={color}
					key={`${boxItem.sinus}${boxItem.cosinus}`}
					size={size}
				/>
			))}
		</group>
	);
}

export type BoxRingProps = {
	children?: React.ReactNode;
	count: number;
	radius: number;
	color: string;
	size: number;
	direction: 'left' | 'right';
};

type stateProps = {
	sinus: number;
	cosinus: number;
	radialPosition: number;
};
