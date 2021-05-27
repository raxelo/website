import {
	Clock,
	Mesh,
	MeshBasicMaterial,
	SphereGeometry,
	Vector3,
	MathUtils,
	Scene,
	BufferGeometry,
	TorusGeometry
} from 'three';

import { RandomUtils } from '../../util/RandomUtils';
import { WaveUtils } from '../../util/WaveUtils';
import { ElementWrapper } from '../ElementWrapper';

export class GeometricShape extends ElementWrapper {
	material: MeshBasicMaterial;
	scene: Scene;

	getRandomGeomtry(): BufferGeometry {
		const options = [
			() =>
				new SphereGeometry(
					8,
					RandomUtils.getRandomInRange(8, 12),
					RandomUtils.getRandomInRange(2, 4)
				),
			() => new TorusGeometry(6, 2, 8, 30)
		];

		return options[RandomUtils.getRandomNumberUpTo(options.length)]();
	}

	buildElement(): Mesh<BufferGeometry, MeshBasicMaterial> {
		const geometry = this.getRandomGeomtry();
		const material = new MeshBasicMaterial({ color: 0xff6347, wireframe: true });
		const element = new Mesh(geometry, material);
		const axis = new Vector3(0.5, 0, 0.5).normalize();
		element.rotateOnAxis(axis, MathUtils.degToRad(45));
		element.rotateX(40);
		this.material = element.material;

		return element;
	}

	animate(clock: Clock): void {
		const element = this.element;
		if (!element) return;

		element.rotateY(clock.getDelta() / 2);
		this.material.color.offsetHSL(0.0001, 0, 0);
		element.position.setY(WaveUtils.getY(clock.getElapsedTime()) * 2);
	}

	addToScene(scene: Scene): void {
		const element = this.buildElement();
		this.element = element;
		scene.add(element);

		this.scene = scene;
	}

	getName(): string {
		return 'GeometricShape';
	}
}
