import type { Clock, Object3D, Scene } from 'three';

export abstract class ElementWrapper {
	element: Object3D;

	abstract addToScene(scene: Scene): void;

	abstract animate(clock: Clock): void;

	abstract getName(): string;

	setVisible(val: boolean): void {
		if (!this.element) return;
		this.element.visible = val;
	}

	isVisible(): boolean {
		return this.element?.visible;
	}
}
