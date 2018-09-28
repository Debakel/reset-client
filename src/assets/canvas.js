class Canvas {
    constructor() {
        this.app = new PIXI.Application({});
        let worker = PIXI.loader.add('assets/gameassets/worker_walking.json').load(this.setup.bind(this));
    }

    setup() {
        let sheet = PIXI.loader.resources["assets/gameassets/worker_walking.json"].spritesheet;
        console.log(sheet);

        var frames = [];

        for (var i = 0; i < 30; i++) {

            // magically works since the spritesheet was loaded with the pixi loader
            frames.push(PIXI.Texture.fromFrame('worker_walking' + i%4 + '.png'));
        }


        const worker = new PIXI.extras.AnimatedSprite(frames);
        worker.anchor.set(0.5);
        worker.x = this.app.screen.width / 2;
        worker.y = this.app.screen.height / 2;

        worker.animationSpeed = .1;
        worker.play();

        this.app.stage.addChild(worker);
    }

    render()  {
        return this.app.view;
    }
}
