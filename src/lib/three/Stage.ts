import {
	AmbientLight,
	Clock,
	PerspectiveCamera,
	PointLight,
	PointLightHelper,
	Scene,
	WebGLRenderer
} from 'three';
import { ElementManager } from './element/ElementManager';

export class Stage {
	private scene: Scene;
	private camera: PerspectiveCamera;
	private renderer: WebGLRenderer;
	private clock: Clock;

	private elementManager: ElementManager;

	constructor(canvas: HTMLCanvasElement) {
		// Initialize our properties
		this.renderer = new WebGLRenderer({
			canvas
		});

		this.camera = new PerspectiveCamera(30);

		this.scene = new Scene();

		const light = new PointLight(0xcccccc, 1.4);
		const pointLightHelper = new PointLightHelper(light);
		this.scene.add(pointLightHelper);
		light.position.z += 30;
		light.position.y += 30;
		this.scene.add(light);

		const ambientLight = new AmbientLight(0xd9e7ff, 0.5);

		this.scene.add(ambientLight);
		this.clock = new Clock();

		// Set up the renderer and camera
		this.updateSize();
		this.camera.position.setZ(50);

		this.renderer.render(this.scene, this.camera);

		// Load element manager
		this.elementManager = new ElementManager(this);
	}

	public start(): void {
		this.elementManager.start();
	}

	public updateSize(): void {
		const canvas = this.renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const camera = this.camera;

		// adjust displayBuffer size to match
		if (canvas.width === width && canvas.height === height) {
			return;
		}

		this.renderer.setSize(width, height, false);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		this.renderer.setPixelRatio(window.devicePixelRatio);
	}

	render(): void {
		this.renderer.render(this.scene, this.camera);
	}

	getElementManager(): ElementManager {
		return this.elementManager;
	}

	getScene(): Scene {
		return this.scene;
	}

	getClock(): Clock {
		return this.clock;
	}
}
