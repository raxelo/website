import { Clock, OrthographicCamera, PointLight, Scene, WebGLRenderer } from 'three';
import { ElementManager } from './element/ElementManager';

export class Stage {
	private scene: Scene;
	private camera: OrthographicCamera;
	private renderer: WebGLRenderer;
	private clock: Clock;
	private cameraFactor: number;

	private elementManager: ElementManager;

	constructor(canvas: HTMLCanvasElement) {
		// Initialize our properties
		this.renderer = new WebGLRenderer({
			canvas
		});
		this.cameraFactor = 50;

		this.camera = new OrthographicCamera(0, 0, 0, 0, 1, 10000);

		this.scene = new Scene();

		const light = new PointLight(0xffffff, 2);
		light.position.z = 10;
		light.position.x = 10;
		light.position.y = 10;
		this.scene.add(light);
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
		const cameraFactor = this.cameraFactor;

		// adjust displayBuffer size to match
		if (canvas.width === width && canvas.height === height) {
			return;
		}

		this.renderer.setSize(width, height, false);
		camera.left = -width / cameraFactor;
		camera.right = width / cameraFactor;
		camera.top = height / cameraFactor;
		camera.bottom = -height / cameraFactor;
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
