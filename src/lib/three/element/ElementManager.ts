import type { Stage } from '../Stage';
import type { ElementWrapper } from './ElementWrapper';
import { GeometricShape } from './impl/GeometricShape';
import { QuestionMark } from './impl/QuestionMark';

export class ElementManager {
	private elements: Array<ElementWrapper>;
	private stage: Stage;

	private shownType: string;

	constructor(stage: Stage) {
		this.stage = stage;
		this.shownType = 'GeometricShape';
		this.elements = this.buildElements();
		this.addElementsToStage();
	}

	public start(): void {
		this.animationLoop();
	}

	buildElements(): Array<ElementWrapper> {
		const geometricShape = new GeometricShape();
		const questionMark = new QuestionMark();
		return [geometricShape, questionMark];
	}

	private addElementsToStage() {
		this.elements.forEach((element) => {
			element.addToScene(this.stage.getScene());
		});
	}

	private animationLoop() {
		requestAnimationFrame(() => this.animationLoop());

		this.elements.forEach((element) => {
			element.setVisible(this.shownType === element.getName());
			if (!element.isVisible()) return;

			element.animate(this.stage.getClock());
		});
		this.stage.render();
	}

	setShownType(value: string): void {
		if (!value || this.shownType === value) return;
		this.stage.getClock().start();
		this.shownType = value;
	}
}
