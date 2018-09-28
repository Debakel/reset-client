class Canvas {
    constructor() {
        this.app = new PIXI.Application({});
    }

    render()  {
        return this.app.view;
    }
}
